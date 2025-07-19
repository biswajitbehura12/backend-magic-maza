import fetch from 'node-fetch';
import 'dotenv/config';

export function getGeminiHostUrl() {
  return process.env.GOOGLE_GEMINI_HOST_URL;
}

export async function detectCountryWithGemini(address) {
  const apiKey = process.env.GEMINI_API_KEY;
  const host = getGeminiHostUrl();
  const url = `${host}/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const body = {
    contents: [
      {
        parts: [
          {
            text: `Detect the country for this address: "${address}". Only return the country name.`
          }
        ]
      }
    ]
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error('Failed to detect country');
  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
}
export async function parseAddressWithGemini(address, country) {
  const apiKey = process.env.GEMINI_API_KEY;
  const host = getGeminiHostUrl();
  const url = `${host}/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        parts: [
          {
            text: `You are an address parser AI. The address below is from the country "${country}". 

Your task is to analyze the address and return a clean, valid JSON object using location keys that are relevant and commonly used in that country.

Only include fields that apply to the address.

Do not explain, just return JSON with relevant fields. No markdown, no code block.

Address: ${address}`
          }
        ]
      }
    ]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) throw new Error('Failed to parse address');

  const data = await response.json();
  let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  text = text
    .replace(/```json|```/g, '')
    .replace(/^"+|"+$/g, '')
    .replace(/\\"/g, '"');

  try {
    return JSON.parse(text);
  } catch (err) {
    let parsedFields = {};
  const regex = /.../gi; // 🔴 remove hardcoded keys
    let match;
    while ((match = regex.exec(text))) {
      parsedFields[match[1]] = match[2].trim();
    }
    return parsedFields;
  }
}
