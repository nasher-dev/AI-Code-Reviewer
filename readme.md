AI Code Reviewer
A full-stack web application that leverages Google Gemini AI to review code, provide actionable feedback, and suggest improvements in real time.

🛠️ Tech Stack
Frontend
React (with Vite) — UI library for building interactive interfaces
React Markdown — For rendering markdown-formatted AI responses
PrismJS — Syntax highlighting in the code editor
React Simple Code Editor — Lightweight code editor component
Axios — HTTP client for API communication
rehype-highlight — Syntax highlighting for markdown code blocks
CSS — Custom styling for a modern, responsive UI

Backend
Node.js — JavaScript runtime
Express — Web server framework
@google/genai — Google Gemini AI SDK for code review
CORS — Middleware to enable cross-origin requests
dotenv — For environment variable management

📦 Project Structure

code-review/
├── backend/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── controllers/
│       │   └── ai.controller.js
│       ├── routes/
│       │   └── ai.routes.js
│       └── services/
│           └── ai.service.js
└── Frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx
        ├── App.css
        ├── main.jsx
        └── index.css

         Getting Started
1. Clone the repository


git clone <your-repo-url>
cd code-review

2. Setup the Backend

cd backend
npm install
# Add your Google Gemini API key to .env as GOOGLE_GEMINI_KEY
npx nodemon


3. Setup the Frontend


cd ../Frontend
npm install
npm run dev


⚙️ Usage
Write or paste code in the left editor panel.
Click Review to send your code to the AI reviewer.
The right panel displays a detailed, markdown-formatted review with strengths, issues, fixes, and suggestions.
🌟 Features
Real-time code review using Google Gemini AI
Syntax-highlighted code editing and review
Professional, readable UI
Actionable, structured feedback for code improvement

📝 Environment Variables
Create a .env file in the backend directory:

GOOGLE_GEMINI_KEY=your_google_gemini_api_key
