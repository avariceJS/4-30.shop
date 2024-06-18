import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "«4:30 SHOP» | Online store of stylish clothes and shoes",
  description: "Buy clothes for teenagers in the online store “4:30 SHOP”. In our online store you can buy stylish teenage clothes and all the necessary accessories. Outerwear and underwear: jackets, pants, hats, socks, briefs, backpacks... Everything a young man needs to look stylish, fashionable, modern. ...",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
