const gpt = require("./gpt.service")

async function logGptResponse(yearsToInvest, startingAmount) {
    const prompt = `I have $${startingAmount} to invest for ${yearsToInvest} years. I need to allocate percentages of my portfolio to domestic stock, foreign stock, bonds, and short-term investments. Based on different risk tolerances (low, medium, high), please provide a JSON object with the following structure:
    
    {
      "lowRisk": {
        "domesticStockPercentage": <number 0 - 100>,
        "foreignStockPercentage": <number 0 - 100>,
        "bondsPercentage": <number 0 - 100>,
        "shortTermPercentage": <number 0 - 100>
      },
      "mediumRisk": {
        "domesticStockPercentage": <number 0 - 100>,
        "foreignStockPercentage": <number 0 - 100>,
        "bondsPercentage": <number 0 - 100>,
        "shortTermPercentage": <number 0 - 100>
      },
      "highRisk": {
        "domesticStockPercentage": <number 0 - 100>,
        "foreignStockPercentage": <number 0 - 100>,
        "bondsPercentage": <number 0 - 100>,
        "shortTermPercentage": <number 0 - 100>
      }
    }
    
    Please fill in the percentages for each category based on the risk tolerance and the given investment amount and duration.
    `;
    try {
        const response = await gpt(prompt);
        const parsedResponse = JSON.parse(response);
        console.log(response)
    } catch (error) {
        if (error instanceof SyntaxError) {
            // Most likely cause is chatGPT sent back some other stuff with the json (e.g., "Certainly! I can help with that..." etc.)
            next({
                status: 500,
                message: `Error parsing response from chatGPT into JSON: ${error},
                Response from chatGPT: ${response}`,
            });
        } else {
            // Anything else will end up here. Make sure OPENAI_API_KEY is set correctly
            next({
                status: 500,
                message: `API request error: ${error}`,
            });
        }
    }
}

logGptResponse(5, 450000)