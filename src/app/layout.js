import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakib Hossen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div>
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
      </body>
    </html>
  );
}
