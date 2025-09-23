// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer } from "./page";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junior Frontend Developer | Rakha Adly",
  description: "Junior Frontend Developer | Rakha Adly",
};

// ✅ Navbar didefinisikan di sini (di luar RootLayout)
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-300 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600">
            Rakha
          </span>
        </a>

        {/* <nav className="hidden gap-8 md:flex">
          <a href="#About" className="text-sm text-gray-700 hover:text-yellow-600 transition">
            About
          </a>
          <a href="#Portofolio" className="text-sm text-gray-700 hover:text-yellow-600 transition">
            Portofolio
          </a>
          <a href="#faq" className="text-sm text-gray-700 hover:text-yellow-600 transition">
            FAQ
          </a>
        </nav> */}
         {/* Tombol Login & Signup */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button className="rounded-full px-5 shadow-md bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-white hover:shadow-lg hover:shadow-yellow-400/50">
              Log In <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="rounded-full px-5 shadow-md bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 text-white hover:shadow-lg hover:shadow-yellow-400/50">
              Sign Up <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Navbar langsung dipanggil */}
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
