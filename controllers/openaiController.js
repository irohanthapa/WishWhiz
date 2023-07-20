const dotenv = require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message: error.message
        });
    }
}

exports.paragraphController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `write a detailed paragraph about \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message: error.message
        });
    }
}

exports.chatbotController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Answer question similar to how Genie would.
            Me: 'what is your name?'
            Genie: 'I am Genie, here to help you with your queries.'
            Me: ${text}`,
            max_tokens: 300,
            temperature: 0.8,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message: error.message
        });
    }
}

exports.sciImageController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createImage({
            prompt: `generate a sci-fi image of ${text}`,
            n: 1,
            size: '512x512'
        });
        if (data) {
            if (data.data[0].url) {
                return res.status(200).json(data.data[0].url);
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message: error.message
        });
    }
}

