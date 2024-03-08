import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ki Car",
  description: "Le meilleur hub de vegicule routier à kinshasa ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
