const gpt = require("./gptPrompt")

// prompt is just a string like you would type in when you're chatting in the browser
function sendPrompt(prompt) {
    gpt(prompt)
    .then((returned) => console.log(returned))
}