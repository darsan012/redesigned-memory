import { createErrorMessage, createSuccessMessage } from "../helpers/errorHandler.js";
import { formatQuiz } from "../helpers/formatQuizResponse.js";
import geminiService from "../services/gemniService.js";

export const generateQuiz = async (req, res) => {
    try {
        const { prompt} = req.body;
        if (!prompt) {
            throw new {message:"Missing required fields", statusCode: 400}
        }
        const rawData = await geminiService(prompt);
        if(rawData.match("I can only generate quizzes.")){
            throw {message:"I can only generate quizzes. Prompt gone wrong", statusCode: 400}
        }
        const data = formatQuiz(rawData)
        return createSuccessMessage({data, res})
    } catch (error) {
        return createErrorMessage({message: error.message, statusCode: error.statusCode, res})
    }
};