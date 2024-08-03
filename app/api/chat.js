import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, please use POST" });
  }

  try {
    const { pantryItems } = req.body;
    if (!pantryItems || !Array.isArray(pantryItems) || pantryItems.length === 0) {
      return res.status(400).json({ error: "Bad request, 'pantryItems' is required and should be a non-empty array" });
    }

    const prompt = `Here are the items in the pantry: ${pantryItems.join(', ')}. Suggest recipes that can be made with these items.`;
    console.log(prompt);

    const gptResponse = await openai.createChatCompletion({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [
        { 
          "role": "system", 
          "content": "You are suggesting recipes to a person who wants to cook with what they have in their pantry. You will be direct and to the point with the recipe suggestions. I want you to just give the recipe name, not the full recipe itself. I want you to find as many recipes as possible with the items available in the pantry."
        },
        {
          "role": "user",
          "content": prompt
        }
      ],
      temperature: 0.7
    });

    console.log(gptResponse);
    return res.status(200).json({ message: "Success", data: gptResponse.data.choices[0].message.content });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
