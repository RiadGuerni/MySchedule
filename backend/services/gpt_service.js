const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
async function getChatResponse(prompt) {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'You are a formal task planning assistant. When given a brief, unstructured input about tasks, convert it into a detailed, organized plan with clear tasks, timelines, and priorities.'
            },
            {
                role: 'user',
                content: prompt
            }
        ]
    });
    return response.data.choices[0].message.content;
}