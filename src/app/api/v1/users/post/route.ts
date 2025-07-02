import { connectDb } from '@/lib/connectDb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const newUser = await req.json();

    const db = await connectDb();
    const ordersCollection = db.collection('users');
    const res = await ordersCollection.insertOne({
      ...newUser,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Order placed successfully', res }, { status: 201 });
  } catch (error) {
    console.error('Error placing order:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
