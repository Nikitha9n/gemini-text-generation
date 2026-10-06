require("dotenv").config();
const express = require("express");
const path = require("path");
const MarkdownIt = require("markdown-it");
const Groq = require("groq-sdk");
const session = require("express-session");

const app = express();
const md = new MarkdownIt();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Set up view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files middleware
app.use(express.static(path.join(__dirname, "public")));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Required for handling fetch() JSON requests

// Session setup
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Groq API call helper
async function getGroqChatCompletion(qnn) {
  const completion = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: [
      { role: "system", content: "You are a helpful AI assistant. Answer clearly and concisely." },
      ...qnn,
    ],
  });
  return completion.choices[0].message.content;
}

// 1. GET: Render chat form
app.get("/ask", (req, res) => {
  res.render("qnform");
});

// 2. POST: Process question & return JSON to chat.js
app.post("/ask", async (req, res) => {
  try {
    let question = req.body.qnsent;

    if (!req.session.history) {
      req.session.history = [];
    }

    // Build conversation transcript for multi-turn context
    const conversationMessages = [];
    req.session.history.forEach((item) => {
      conversationMessages.push({ role: "user", content: item.question });
      conversationMessages.push({ role: "assistant", content: item.rawAnswer });
    });

    // Add current question
    conversationMessages.push({ role: "user", content: question });

    // Fetch response from Groq
    const rawAnswer = await getGroqChatCompletion(conversationMessages);
    const answerHtml = md.render(rawAnswer);

    // Save in session history
    req.session.history.push({
      question: question,
      rawAnswer: rawAnswer,
      answerHtml: answerHtml,
      time: new Date().toLocaleTimeString(),
    });

    // Send back JSON (required for chat.js to update the page)
    res.json({ question: question, answerHtml: answerHtml });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Something went wrong fetching the answer." });
  }
});

// 3. GET: View session history
app.get("/history", (req, res) => {
  const userHistory = req.session.history || [];
  res.render("history", { history: userHistory });
});

// 4. POST: Reset history
app.post("/clear-history", (req, res) => {
  req.session.history = [];
  res.redirect("/history");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/ask");
});