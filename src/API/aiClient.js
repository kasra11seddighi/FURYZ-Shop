import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true
});
console.log(import.meta.env);


export const sendAIMessage = async (messages) => {

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages
  });

  return response.choices[0].message.content;
};
