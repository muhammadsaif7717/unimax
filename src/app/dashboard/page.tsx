'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const { data: session } = useSession();
  return (
    <div className="pt-5">
      <h1 className="mt-5 text-6xl font-semibold text-blue-400">
        Welcome Back {session?.user.name}
      </h1>
      <div className="mt-5 flex items-center justify-between gap-10">
        <div className="h-screen w-56">
          <ul className="flex flex-col gap-3">
            <li className="w-full rounded-2xl bg-gray-700 p-3 text-center text-lg font-semibold hover:bg-gray-800">
              <Link href={`/dashboard/users`}>Users</Link>{' '}
            </li>
            <li className="w-full rounded-2xl bg-gray-700 p-3 text-center text-lg font-semibold hover:bg-gray-800">
              <Link href={`/dashboard/users`}>Users</Link>{' '}
            </li>
            <li className="w-full rounded-2xl bg-gray-700 p-3 text-center text-lg font-semibold hover:bg-gray-800">
              <Link href={`/dashboard/users`}>Users</Link>{' '}
            </li>
            <li className="w-full rounded-2xl bg-gray-700 p-3 text-center text-lg font-semibold hover:bg-gray-800">
              <Link href={`/dashboard/users`}>Users</Link>{' '}
            </li>
          </ul>
        </div>
        <div className="h-screen w-full bg-white">few</div>
      </div>
    </div>
  );
}
