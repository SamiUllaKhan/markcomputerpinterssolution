import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: {
        default: "Mark Computer and Printer Solutions | Service & Sales in Davanagere",
        template: "%s | Mark Computer and Printer Solutions"
    },
    description: "Expert Computer and Printer Service & Sales in Davanagere, Karnataka. Authorized dealer for HP, Dell, Lenovo. Professional IT solutions and software services.",
    keywords: [
        "Computer Service Davanagere",
        "Printer Service Davanagere",
        "Computer Sales Davanagere",
        "Printer Sales Karnataka",
        "Laptop Repair Davanagere",
        "IT Solutions Davanagere",
        "Mark Computer and Printer Solutions",
        "Tally Service Davanagere",
        "ERP Software Karnataka"
    ],
    authors: [{ name: "Mark Computer and Printer Solutions" }],
    creator: "Mark Computer and Printer Solutions",
    publisher: "Mark Computer and Printer Solutions",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://markcomputerprinter.com",
        siteName: "Mark Computer and Printer Solutions",
        title: "Mark Computer and Printer Solutions | Best IT Service & Sales in Davanagere",
        description: "Your trusted center for Computer Sales, Printer Service, and IT Solutions in Davanagere, Karnataka.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mark Computer and Printer Solutions Davanagere",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Computer & Printer Solutions in Davanagere",
        description: "Authorized Sales and Expert Service for Computers and Printers in Davanagere, Karnataka.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/logo.png", // Using logo.png as the apple touch icon
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
