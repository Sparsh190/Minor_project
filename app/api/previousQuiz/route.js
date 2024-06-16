import { NextResponse } from 'next/server';
import dbConnect from '@/app/middleware/database';
import Result from '@/app/models/Result';

export async function POST(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
      try {
          const { username } = await req.json();

          // Find all quiz results based on the username
          const quizResults = await Result.find({ username });

          if (!quizResults || quizResults.length === 0) {
              return NextResponse.json({ message: 'No quiz results found for this user' }, { status: 404 });
          }

          return NextResponse.json({ quizResults }, { status: 200 });
      } catch (error) {
          console.error('Error fetching quiz results:', error);
          return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
  } else {
      return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}
