import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // O Mercado Pago envia o ID do recurso em data.id
    console.log('Webhook recebido:', body);

    // Retorna 200 imediatamente para confirmar o recebimento
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar' }, { status: 400 });
  }
}