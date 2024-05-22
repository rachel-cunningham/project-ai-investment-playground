const gpt = require("./gpt.service");

async function sendPrompt(req, res, next) {
    try {
        const goals  = req.body.data;

        // It is very important that the prompt ensures chatGPT will (consistently) respond with a json string and nothing else. We don't want to have to use regex to pull the object out of a big useless string
        const prompt = `I have $${goals.starting_amount_to_invest} to invest for ${goals.years_to_invest_for} years. I would like to get a ${goals.expected_return_on_investment} return on my investment. I need to allocate percentages of my portfolio to domestic stock, foreign stock, bonds, and short-term investments. Based on different risk tolerances (low, medium, high), please provide a JSON object (without any additional text or formatting) with the following structure:
    
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
    Our data has shown that all stocks are either medium or high risk. Please adjust your response to include very little or no stocks (domesticStockPercentage, foreignStockPercentage) under lowRisk
    Please ensure the response is a valid JSON object and contains no additional text.
    `;
        const response = await gpt(prompt);
        const parsedResponse = JSON.parse(response); // Gives us an actual object to work with
        return parsedResponse
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

module.exports = {sendPrompt};
