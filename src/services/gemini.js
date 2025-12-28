import { GoogleGenerativeAI } from '@google/generative-ai';
import { experienceData, projectsData, skillsData, aboutData } from '../data/portfolioData';

// Construct the system prompt with portfolio context
const generateSystemPrompt = () => {
    const skillsList = skillsData.map(s => s.name).join(', ');

    return `
You are a helpful and professional AI assistant for Shashwat Shyam Tare's portfolio website.
Your role is to answer visitor questions about Shashwat's professional background, skills, and projects.

CONTEXT:
About Shashwat:
${JSON.stringify(aboutData, null, 2)}

Experience History:
${JSON.stringify(experienceData, null, 2)}

Projects:
${JSON.stringify(projectsData, null, 2)}

Technical Skills:
${skillsList}

INSTRUCTIONS:
1. Answer questions based ONLY on the provided context.
2. If the user asks something outside the scope of this portfolio (e.g., general world knowledge, math problems), politely steer them back to Shashwat's work.
3. Be concise, professional, and friendly.
4. If asked about contact info, refer them to the contact section or socials (which are displayed on the site).
5. Do not hallucinate information not present in the data.
`;
};

let chatSession = null;

export const getGeminiResponse = async (userMessage) => {
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

    if (!apiKey) {
        return "Error: API Key is missing. Please set REACT_APP_GEMINI_API_KEY in your .env file.";
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: generateSystemPrompt(),
        });

        if (!chatSession) {
            chatSession = model.startChat({
                history: [],
            });
        }

        const result = await chatSession.sendMessage(userMessage);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I encountered an error while processing your request. Please try again later.";
    }
};
