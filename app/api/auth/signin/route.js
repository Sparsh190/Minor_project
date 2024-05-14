import { NextResponse } from 'next/server';
import dbConnect from '@/app/middleware/database';
import User from '@/app/models/user';

export async function POST(req, res) {

  await dbConnect();
  
  if (req.method === 'POST') {
    try {
      const requestData=await req.json()
      const { username, password } = requestData;

      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      // Check if the password is correct
      if (user.password !== password) {
        return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
      }

      return NextResponse.json({ message: 'User signed in successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}
