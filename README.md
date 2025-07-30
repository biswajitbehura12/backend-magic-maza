# 📍 Magic Maza Backend — AI Address Parser

A smart, AI-powered backend service for parsing and structuring raw address data using natural language processing. Built with **Node.js**, **Express**, and integrated with **AI APIs** (e.g., Gemini or OpenAI), this backend provides intelligent, region-aware address parsing.

---

## 🔍 Overview

This project focuses on converting unstructured or semi-structured address inputs into clean, region-specific JSON objects using AI (LLM-based) models.

Use cases include:
- 📦 E-commerce shipping address validation
- 🚚 Logistics & last-mile delivery platforms
- 🏢 CRM/ERP address cleanup and deduplication
- 📝 Form auto-fill with AI-based predictions

---

## 🧠 How It Works

1. Receives raw address input.
2. Detects the **country** using keyword/AI logic.
3. Sends input to **AI API** (like Gemini or OpenAI).
4. Returns a **structured address JSON**, region-specific.

### 🧪 Example Output for Indian Address

```json
{
  "floor": "2nd Floor",
  "building": "Sky Towers",
  "street": "MG Road",
  "district": "Bangalore Urban",
  "state": "Karnataka",
  "pincode": "560001",
  "country": "India"
}
📁 Project Structure
bash
Copy
Edit
backend-magic-maza/
├── controllers/       # Address parsing logic
├── models/            # (Optional) MongoDB models
├── routes/            # API endpoints
├── middleware/        # Error and auth middleware
├── config/            # DB and .env configuration
├── utils/             # Country detection & formatting
├── .env               # Environment secrets
└── server.js          # App entry point
🛠 Tech Stack
Node.js & Express.js

Gemini / OpenAI API

MongoDB + Mongoose (Optional)

Axios for API requests

dotenv for config

(Optional) Helmet, CORS, Morgan

⚙️ Setup Instructions
1. Clone & Install
bash
Copy
Edit
git clone https://github.com/biswajitbehura12/backend-magic-maza.git
cd backend-magic-maza
npm install
2. Create Environment File
.env file in the root directory:

env
Copy
Edit
PORT=5000
AI_PROVIDER=gemini        # Options: 'gemini' or 'openai'
AI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4        # Only if using OpenAI
GEMINI_MODEL=gemini-pro   # Only if using Gemini
You can also save this as .env.example for reference.

🚀 Run the Project
bash
Copy
Edit
npm start
🔗 API Endpoint
Method	Endpoint	Description
POST	/api/parse	Parses raw address input

📥 Sample Request
json
Copy
Edit
{
  "address": "2nd Floor, Sky Towers, MG Road, Bangalore 560001"
}
📤 Sample Response
json
Copy
Edit
{
  "floor": "2nd Floor",
  "building": "Sky Towers",
  "street": "MG Road",
  "district": "Bangalore Urban",
  "state": "Karnataka",
  "pincode": "560001",
  "country": "India"
}
📄 .env Example
env
Copy
Edit
PORT=5000
AI_PROVIDER=gemini
AI_API_KEY=your_api_key
OPENAI_MODEL=gpt-4
GEMINI_MODEL=gemini-pro
🧰 Optional Enhancements
 Swagger/OpenAPI documentation

 Dockerize the app

 Redis caching for repeated address inputs

 Country-specific field validation

 Web UI tester for address parsing

🤝 Contributing
Have an idea or improvement? Feel free to:

Fork the repo

Create a feature branch

Submit a pull request

📄 License
This project is licensed under the MIT License.

🔗 Related Links
🔗 Project Repository

📖 Gemini API Docs

📖 OpenAI API Docs

yaml
Copy
Edit

---

### ✅ Next Steps for You

1. Copy this into your `README.md` file.
2. Push your `.env.example` file to GitHub (without secrets).
3. (Optional) Add Swagger docs or a Postman collection.

Would you like me to generate a sample Swagger spec or Dockerfile for this project?
