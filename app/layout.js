import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: {
        default: "Mark Computer and Printer Solutions | Davanagere",
        template: "%s | Mark Computer and Printer Solutions"
    },
    description: "Premier IT infrastructure and software provider in Davanagere. Specializing in Computer Sales, Printer Repair, ERP Software, and Business IT Services.",
    keywords: ["Computer Sales", "Printer Repair", "ERP Software Davanagere", "IT Services Davanagere", "Mark Computer and Printer Solutions", "Tally Partner", "Laptop Service"],
    authors: [{ name: "Mark Computer and Printer Solutions" }],
    creator: "Mark Computer and Printer Solutions",
    publisher: "Mark Computer and Printer Solutions",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://markcomputerprinter.com",
        siteName: "Mark Computer and Printer Solutions",
        title: "Mark Computer and Printer Solutions | Hardware, Software & IT Services",
        description: "Your trusted partner for Computer Sales, ERP Software, and Business IT Services in Davanagere.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mark Computer and Printer Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mark Computer and Printer Solutions | Hardware, Software & IT Services",
        description: "Your trusted partner for Computer Sales, ERP Software, and Business IT Services in Davanagere.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
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
