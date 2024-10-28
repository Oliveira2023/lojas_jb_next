// src/pages/api/getMapsApiKey.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ apiKey: process.env.MAPS_API });
}