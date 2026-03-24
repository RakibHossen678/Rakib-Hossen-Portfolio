import { Inter, Montserrat } from "next/font/google";
import React from "react";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";
import PageTransition from "@/components/animations/PageTransition";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-space",
});
export const metadata = {
  title: "Rakib Hossen",
  description: "MERN Stack Developer at Zentexx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="portfolioTheme">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(135,80,247,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(42,20,84,0.4),transparent_40%)]" />
          <div className="relative z-20">
            <div className="h-[72px]">
              <Navbar />
            </div>
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#f8fafc",
              border: "1px solid #334155",
            },
          }}
        />
      </body>
    </html>
  );
}
