const { OpenAI } = require('openai');
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", "..", ".env") });
const { OPENAI_API_KEY } = process.env;

// Hit up James for the OPENAI_API_KEY if you don't already have it in your .env
// See https://platform.openai.com/docs/quickstart?context=node "Step 2: Set up your API key"

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Please don't change any of this stuff, not all of openAI's docs are up to date so it took me a minute to figure this out
async function gpt(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content
}

module.exports = gpt