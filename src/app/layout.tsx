import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/Layout/SmoothScroll";
import { Cursor } from "@/components/Layout/Cursor";

import { Header } from "@/components/Header";
import { NoiseOverlay } from "@/components/UI/NoiseOverlay";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/UI/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURA DENIM | Luxury Selvedge Experience",
  description: "A premium interactive denim brand experience by Aura Denim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-primary">
        <CartProvider>
          <SmoothScroll>
            <Cursor />
            <Header />
            <CartDrawer />
            {children}
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
