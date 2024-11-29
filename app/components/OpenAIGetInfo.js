export const OpenAIGetInfo = async (drugData) => {
  const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a tool that that returns general information about given active ingredients given the ingredient name and other relevant information. provide your answers in layman\'s terms',
          },
          {
            role: 'user',
            content: `
              given active ingredient ${drugData.ingredient} and medication name ${drugData.name}, return a json object with properties "description" and "sideEffects".
              description: is a string. max 250 characters
              sideEffects: array of strings. each string should be a single word. limit to 3-5 items
            `
          },
        ],
        response_format: { "type": "json_object" }
      }),
    });

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (e) {
      console.log(e);
  }
  return {
    description: "description - openai failed",
    sideEffects: [
      "side effect 1",
      "side effect 2"
    ]
  }
};