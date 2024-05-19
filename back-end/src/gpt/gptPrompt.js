const { OpenAI } = require('openai');
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const { OPENAI_API_KEY } = process.env;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

async function gpt(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content
}

module.exports = gpt
