import { connectDb } from '@/lib/connectDb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const newUser = await req.json();

    const { password, confirmPassword, ...rest } = newUser;

    // validate password presence
    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }

    // confirm password match
    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const db = await connectDb();
    const usersCollection = db.collection('users');

    const res = await usersCollection.insertOne({
      ...rest,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'User created successfully', insertedId: res.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
