# AI-Powered Contextual Assistant Web App

A full-stack conversational AI assistant built with Node.js, Express, and the Groq Cloud SDK. The application features multi-turn conversation memory, dynamic asynchronous message processing with zero full-page reloads, and sanitized Markdown rendering.

---

## 🚀 Features

- **Asynchronous Interactions:** Implements vanilla JavaScript, the `Fetch API`, and `async/await` to handle prompt submission and response rendering dynamically without refreshing the browser.
- **Conversational Memory:** Preserves multi-turn dialogue context across interactions using `express-session`, maintaining dynamic chat transcripts passed directly to the LLM backend.
- **Rich Markdown Formatting:** Integrates `markdown-it` to parse headers, bullet lists, bold text, and code blocks cleanly into the DOM.
- **Modular MVC-Inspired Structure:** Separates client assets (`public/css`, `public/js`) from server routing controllers and templating views (`views/*.ejs`).

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, `express-session`
- **Frontend:** Vanilla JavaScript (ES6+), EJS, CSS3
- **AI Integration:** Groq Cloud API (`@groq/groq-sdk`), `markdown-it`
- **Environment Management:** `dotenv`

---

## 📂 Project Structure

```text
gemini_text_generation/
├── public/
│   ├── css/
│   │   ├── chat.css
│   │   ├── history.css
│   │   ├── response.css
│   │   └── style.css
│   └── js/
│       └── chat.js
├── views/
│   ├── history.ejs
│   ├── qnform.ejs
│   └── response.ejs
├── .gitignore
├── index.js
├── package.json
└── README.md
```
