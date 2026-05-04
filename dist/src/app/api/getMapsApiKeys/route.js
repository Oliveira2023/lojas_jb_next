// src/app/api/getMapsApiKey/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    console.log('get');
    return NextResponse.json({ apiKey: process.env.MAPS_API_KEY });
}
