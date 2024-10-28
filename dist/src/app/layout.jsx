import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Guia lojas Jardim Brasil",
    description: "Guia das lojas Jardim Brasil",
    keywords: ["Jardim Brasil", "Lojas Jardim Brasil", "Lojas Jardim", "Padaria Jardim", "Padaria Jardim Brasil", "Lojas Jardim Brasil", "Lojas Jardim", "Padaria Jardim", "Padaria Jardim Brasil"],
    icons: {
        icon: "/favicon.ico",
    },
};
export default function RootLayout({ children, }) {
    return (<html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>);
}
