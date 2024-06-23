import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FilterContextProvider } from "@/context/filterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARVA - CAFE FINDER",
  description: "made by aryan inguz for arva.health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FilterContextProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
    </FilterContextProvider>
  );
}
