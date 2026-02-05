import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Mark Computer and Printer Solutions | Hardware, Software & IT Services",
    description: "Your trusted partner for Computer Sales, ERP Software, and Business IT Services.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
