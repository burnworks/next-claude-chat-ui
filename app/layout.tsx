import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const Font = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Claude AI Chat",
  description: "Claude AI Chat UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={Font.className}>
        {children}
      </body>
    </html>
  );
}
