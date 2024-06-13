"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function getLang(text) {
  const prompt = `What coding language is this code? Please only respond with the answer, as least words as possible.
        \`\`\`
        ${text}
        \`\`\`
        `;

  return await openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })
    .then((res) => res.choices[0].message.content);
}

export async function convertCode(data) {
  const prompt = `Convert this code from ${data.currentLang} to ${data.wantedLang}. Please only respond with the answer, as least words as possible. Please format the code correctly with indention of 2 and following formatting standards.
        \`\`\`
        ${data.codeBlock}
        \`\`\`
        `;
  return await openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })
    .then((res) => {
      console.log(res);
      return res.choices[0].message.content;
    });
}
