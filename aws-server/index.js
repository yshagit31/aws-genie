// import express from "express"
import { config } from "dotenv"
config()

import OpenAI from "openai";
const openai = new OpenAI({
    apiKey:process.env.API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "developer", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

//   console.log(completion.choices[0]);
}

main();

// console.log(apiKey);
