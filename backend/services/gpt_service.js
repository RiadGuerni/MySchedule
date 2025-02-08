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
                content: 'You are a formal task planning assistant. When given a brief, unstructured input about tasks, convert it into a detailed, organized plan with clear tasks, timelines, and priorities. return three jsons that are schedules that have the day as a MM/DD/YYYY format and the tasks as a json array the tasks would be a json with a name , duration and description'
            },
            {
                role: 'user',
                content: prompt
            }
        ]
    });
    return response.data.choices[1].message.content;
}