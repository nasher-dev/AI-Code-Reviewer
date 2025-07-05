# AI Code Reviewer 🤖💻

![GitHub Release](https://img.shields.io/badge/Latest%20Release-v1.0.0-blue.svg)  
[![View Releases](https://img.shields.io/badge/View%20Releases%20on%20GitHub-brightgreen.svg)](https://github.com/nasher-dev/AI-Code-Reviewer/releases)

Welcome to the **AI Code Reviewer** repository! This project is a full-stack web application that uses Google Gemini AI to review code, provide actionable feedback, and suggest improvements in real-time. This README will guide you through the features, installation, usage, and contribution details of the project.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-Time Code Review**: The application analyzes your code as you type, providing instant feedback.
- **Actionable Suggestions**: Get clear, actionable suggestions for code improvements.
- **Multi-Language Support**: Supports various programming languages, making it versatile for developers.
- **User-Friendly Interface**: The clean and intuitive UI ensures a smooth user experience.
- **Integration with GitHub**: Easily connect your GitHub repositories for seamless code reviews.

## Technologies Used

This project utilizes a range of technologies to deliver its functionality:

- **Frontend**: 
  - React
  - CSS
  - PrismJS for syntax highlighting
  - React Markdown for rendering Markdown content

- **Backend**: 
  - Node.js
  - Express.js
  - Axios for making HTTP requests
  - CORS for handling cross-origin requests

- **AI Integration**: Google Gemini AI for code analysis and feedback.

## Installation

To get started with the AI Code Reviewer, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nasher-dev/AI-Code-Reviewer.git
   cd AI-Code-Reviewer
   ```

2. **Install Dependencies**:
   For the frontend:
   ```bash
   cd client
   npm install
   ```

   For the backend:
   ```bash
   cd server
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the server directory and add your Google Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the Application**:
   Start the backend server:
   ```bash
   cd server
   npm start
   ```

   Start the frontend application:
   ```bash
   cd client
   npm start
   ```

Visit `http://localhost:3000` in your browser to access the application.

## Usage

Using the AI Code Reviewer is straightforward:

1. **Access the Application**: Open your web browser and go to `http://localhost:3000`.
2. **Log In**: If you have a GitHub account, log in to connect your repositories.
3. **Start Reviewing**: Paste your code into the editor. The AI will analyze it and provide feedback in real-time.
4. **Implement Suggestions**: Review the suggestions provided and make improvements to your code as needed.

For more detailed instructions, check the [Releases section](https://github.com/nasher-dev/AI-Code-Reviewer/releases) for downloadable files and execution steps.

## Contributing

We welcome contributions! If you would like to contribute to the AI Code Reviewer, please follow these steps:

1. **Fork the Repository**: Click the fork button at the top right of the page.
2. **Create a Branch**: Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes**: Implement your changes in the code.
4. **Commit Your Changes**:
   ```bash
   git commit -m "Add your message here"
   ```
5. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**: Go to the original repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, feel free to reach out:

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/your-profile)

Thank you for checking out the AI Code Reviewer! We hope it helps you improve your coding skills and streamline your development process. For the latest updates, visit the [Releases section](https://github.com/nasher-dev/AI-Code-Reviewer/releases).