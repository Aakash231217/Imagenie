import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';

export default async function middleware(req: NextRequest) {
  console.log('Middleware executed');
  return clerkMiddleware()(req);
}

export const config = {
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};