import Question from "@/app/models/Question";
import Quiz from "@/app/models/Quiz";
import { NextResponse} from 'next/server'
import dbConnect from '@/app/middleware/database';

export async function POST(req,res) {
  dbConnect();
  try{
    const requestData = await req.json();
    const existingQuiz = await Quiz.findOne({ quizId: requestData.quizId });
    if(existingQuiz){
      return NextResponse.json(existingQuiz, {status: 200})
    }
    else{
      const pipeline = [
        { $sample: { size: 5} }
      ];
      let question = await Question.aggregate(pipeline);
      return NextResponse.json({question}, {status: 200})
    }
  }
  catch(error){
    return NextResponse.json({error}, {status: 400})
  }
}

