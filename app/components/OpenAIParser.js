import { OPENAI_API_KEY } from "@env";

export const OpenAIParser = async (inputText) => {
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
            content: 'You are a tool that that parses scanned OCR data from medication labels into usable data',
          },
          {
            role: 'user',
            content: `
              this is scanned OCR text from a medication label: ${inputText}. parse into json with properties "name", "dose", "frequency", "duration", "strength" according to the following descriptions:
              "name": return the medication name
              "dose": return a dosage amount. example: 2mL
              "frequency": return a number in days. default to 0
              "duration": return a number in weeks. default to 0
              "strength": return strength per dose. example: 500mg
              if confidence levels are low, leave properties as the defaults or null
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
    name: "Not Detected",
    dose: null,
    frequency: null,
    duration: null,
    strength: null
  }
};
