import { connectToDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, tag, prompt } = await req.json();

  try {
    await connectToDb();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.error(error.message);
    return new Response("Falied to create a new Prompt", { status: 500 });
  }
};

// I am going to give you a piece of code, and you tell me how I can make it cleaner, more readable, and more efficient.
