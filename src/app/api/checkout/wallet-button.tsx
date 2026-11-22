"use client";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!);

export default function WalletButton({ preferenceId }: { preferenceId: string }) {
  return <Wallet initialization={{ preferenceId }} />;
}