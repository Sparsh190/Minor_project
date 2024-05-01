import Question from "../../../models/Question";
import connectDB from "../../middleware/mongoose";
import { NextResponse } from 'next/server'

 
export async function GET(request) {
  let question = await Question.find();
  return NextResponse.json({ question}, { status: 200 })
}