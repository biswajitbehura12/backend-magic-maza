
import { generateToken } from '../utils/token.js';
import { detectCountryWithGemini, parseAddressWithGemini } from '../utils/gemini.js';
import { sendResponse } from '../helpers/sendResponse.js';
import 'dotenv/config';

export function createToken(req, res) {
  const { token, expiresIn } = generateToken();
  sendResponse(res, {
    statusCode: 200,
    statusMessage: 'OK',
    state: true,
    data: { token, expires_in: expiresIn }
  });
}

export async function detectCountry(req, res, next) {
  const { address } = req.body;
  if (!address) return next({ status: 400, message: 'Missing address' });
  try {
    const country = await detectCountryWithGemini(address);
    sendResponse(res, {
      statusCode: 200,
      statusMessage: 'OK',
      state: true,
      data: { country }
    });
  } catch (err) {
    next(err);
  }
}

export async function parseAddress(req, res, next) {
  const { address, country } = req.body;
  if (!address || !country) return next({ status: 400, message: 'Missing address or country' });
  try {
    const parsed = await parseAddressWithGemini(address, country);
    sendResponse(res, {
      statusCode: 200,
      statusMessage: 'OK',
      state: true,
      data: parsed
    });
  } catch (err) {
    next(err);
  }
}
