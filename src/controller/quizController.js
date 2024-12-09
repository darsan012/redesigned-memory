import geminiService from "../services/gemniService.js";

export const generateQuiz = async (req, res) => {
    const { prompt} = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const quiz = await geminiService(prompt);
        return res.status(200).json({ quiz });
    } catch (error) {
        console.error('Error generating quiz:', error.message);
        return res.status(500).json({ error: 'Failed to generate quiz' });
    }
};