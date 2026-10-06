# AI-Powered Contextual Assistant Web App

A full-stack conversational AI web application built with Node.js, Express, and the Groq Cloud SDK. The application features multi-turn conversation memory, dynamic asynchronous message processing with zero full-page reloads, and sanitized Markdown rendering.

---

## 🚀 Features

- **Asynchronous Interactions:** Uses vanilla JavaScript, the `Fetch API`, and `async/await` to handle prompt submission and dynamic response rendering without page refreshes.
- **Conversational Memory:** Preserves multi-turn context across queries using `express-session`, maintaining dynamic dialogue transcripts passed directly to the LLM backend.
- **Rich Markdown Formatting:** Integrates `markdown-it` to parse headers, bullet lists, bold text, and code blocks cleanly into the DOM.
- **Modular Project Structure:** Separates client assets (`public/css`, `public/js`) from server routing controllers and templating views (`views/*.ejs`).

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, `express-session`
- **Frontend:** Vanilla JavaScript (ES6+), EJS, CSS3
- **AI Integration:** Groq Cloud API, `markdown-it`
- **Configuration:** `dotenv`

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

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A valid [Groq Cloud API Key](https://console.groq.com/)

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/Nikitha9n/gemini-text-generation.git](https://github.com/Nikitha9n/gemini-text-generation.git)
   cd gemini-text-generation
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   GROQ_API_KEY=your_api_key_here
   SESSION_SECRET=your_session_secret
   ```

4. **Run the application:**

   ```bash
   node index.js
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000`.
