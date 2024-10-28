// src/app/api/getMapsApiKey/route.ts
import { NextResponse } from 'next/server';
import { log } from 'node:console';

export async function GET() {
    return NextResponse.json({ apiKey: process.env.MAPS_API_KEY });
}