import WalletButton from "./wallet-button";
import { createPreference } from "./actions";

export default async function PageBottom() {
  const preferenceId = await createPreference();
  return <WalletButton preferenceId={preferenceId} />;
}