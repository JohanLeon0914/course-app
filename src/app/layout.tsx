import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courses App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ marginTop: '120px' }}>
          {children}
        </div>
        <Footer />
      </div>
      </body>
    </html>
  );
}
