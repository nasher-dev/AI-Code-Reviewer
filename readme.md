# 🤖 AI Code Reviewer

AI Code Reviewer is a full-stack web application that integrates Google Gemini AI to intelligently analyze and review code in real time. It empowers developers by offering instant, AI-driven feedback on code quality, potential bugs, optimization opportunities, and best practices — all in a beautifully designed interface. Built with modern web technologies, the platform provides a seamless editing and reviewing experience for developers seeking rapid, actionable insights into their code.

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ **React (with Vite)** — UI library for building interactive interfaces  
- 📝 **React Markdown** — For rendering markdown-formatted AI responses  
- 🌈 **PrismJS** — Syntax highlighting in the code editor  
- ✍️ **React Simple Code Editor** — Lightweight code editor component  
- 📡 **Axios** — HTTP client for API communication  
- 🔍 **rehype-highlight** — Syntax highlighting for markdown code blocks  
- 🎨 **CSS** — Custom styling for a modern, responsive UI  

### Backend

- 🟢 **Node.js** — JavaScript runtime  
- 🚂 **Express** — Web server framework  
- 🤖 **@google/genai** — Google Gemini AI SDK for code review  
- 🔓 **CORS** — Middleware to enable cross-origin requests  
- 🔐 **dotenv** — For environment variable management  

---

## 📦 Project Structure

You're looking to represent your project's file structure in a GitHub README using a visually appealing and easy-to-understand format, similar to the image you provided. This is typically done using ASCII art for the directory tree and then explaining each file or directory.

Here's how you can structure that section in your `README.md`:

---

## 📂 Project Structure

This project follows a standard full-stack application structure, clearly separating frontend and backend concerns.

```
code-review/
├── backend/                                  # Backend server built with Node.js and Express
│   ├── .env                                  # Environment variables (e.g., API keys, port)
│   ├── package.json                          # Backend dependencies and scripts
│   ├── server.js                             # Entry point for the Node.js backend server
│   └── src/                                  # Source code for the backend application
│       ├── app.js                            # Express application setup and middleware
│       ├── controllers/                      # Handles request logic for AI interactions
│       │   └── ai.controller.js              # Controller for AI code review requests
│       ├── routes/                           # Defines API endpoints
│       │   └── ai.routes.js                  # Routes specifically for AI services
│       └── services/                         # Contains business logic and external API calls
│           └── ai.service.js                 # Service for interacting with Google Gemini AI
└── Frontend/                                 # Frontend application built with React and Vite
    ├── package.json                          # Frontend dependencies and scripts
    ├── vite.config.js                        # Vite configuration for the React app
    ├── index.html                            # Main HTML file for the frontend
    └── src/                                  # Source code for the React application
        ├── App.jsx                           # Main React component
        ├── App.css                           # Styles for the App component
        ├── main.jsx                          # Entry point for the React application
        └── index.css                         # Global styles for the frontend
```

---


