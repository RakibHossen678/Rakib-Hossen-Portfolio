import React from "react";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Rakib Hossen",
  description: "Professional Front-End Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <div className="">
          
          <div>
            <div className="h-[62px]">
              <Navbar></Navbar>
            </div>
          </div>
          {children}
          <div>
            <Footer></Footer>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
