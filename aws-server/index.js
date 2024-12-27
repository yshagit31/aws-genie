import express from "express";
import { config } from "dotenv"
import  {GoogleGenerativeAI} from "@google/generative-ai";
import bodyParser from "body-parser";
import cors from "cors"

const app=express();
const port=3000;
config()

app.use(cors( {origin : "*"}));
app.use(bodyParser.json());
const genAI= new GoogleGenerativeAI(process.env.API_KEY);
const model=genAI.getGenerativeModel({model:"gemini-1.5-flash"});

app.post('/generate', async(req,res)=>{
  try{
    const {prompt} =req.body;
    if(!prompt)
    {
      return res.status(400).json({error:"Prompt is required"})
    }

  const result= await model.generateContent(prompt);
  res.status(200).json({
    response: result.response.text(),
  });
} catch (error) {
  console.error('Error generating text:', error.message);
  res.status(500).json({ error: 'Failed to generate text' });
}
});



// console.log(genAI);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});