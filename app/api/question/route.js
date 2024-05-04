import Question from "@/app/models/Question";
import { NextResponse} from 'next/server'
import dbConnect from '@/app/middleware/database';

export async function GET() {
  dbConnect();
  try{
    let question = await Question.find();
    return NextResponse.json({question}, {status: 200})
  }
  catch(error){
    return NextResponse.json({error}, {status: 400})
  }
}
export async function POST(req, res) {
  // Ensure that the database is connected
  await dbConnect();

  if (req.method === 'POST') {
    try {
      // Parse the JSON request body
      const requestData = await req.json();

      // Extract data from the parsed request body
      const { question, answer, options, unit, topic, subject } = requestData;

      // Create a new question object
      const newQuestion = new Question({
        question,
        answer,
        options,
        unit,
        topic,
        subject
      });

      // Save the new question to the database
      await newQuestion.save();
      console.log(newQuestion)
      // Return a success message in the response
      return NextResponse.json({ message: 'Question added successfully' },{status: 201});
    } catch (error) {
      // If an error occurs, return the error in the response
      return NextResponse.json({ error: error.message },{status: 400});
    }
  } else {
    // If the request method is not POST, return a method not allowed error
    return NextResponse.json({ message: 'Method Not Allowed' },{status: 500});
  }
}