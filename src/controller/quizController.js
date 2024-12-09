import { createErrorMessage, createSuccessMessage } from "../helpers/errorHandler.js";
import geminiService from "../services/gemniService.js";

export const generateQuiz = async (req, res) => {
    try {
        const { prompt} = req.body;
        if (!prompt) {
            throw new {message:"Missing required fields"}
        }
        const quiz = await geminiService(prompt);
        return createSuccessMessage({data: quiz, res})
    } catch (error) {
        console.error('Error generating quiz:', error.message);
        return createErrorMessage({message: error.message, res})
    }
};