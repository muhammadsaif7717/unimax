import { connectDb } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import { sendEmail } from '@/helper/mailer';

connectDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }
    const salt = bcrypt.genSaltSync(10);
    const hassedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hassedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

    // send verification email
    await sendEmail(email, 'VERIFY', savedUser._id.toString());

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
