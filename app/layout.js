import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    metadataBase: new URL("https://markcomputers.in"),
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
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://markcomputers.in",
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
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/logo.png",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mark Computer and Printer Solutions",
    "image": "https://markcomputers.in/logo.png",
    "@id": "https://markcomputers.in",
    "url": "https://markcomputers.in",
    "telephone": "+91 87924 10480",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "S M Krishna Nagara, Vijayanagara, Apache Nagar",
        "addressLocality": "Davanagere",
        "postalCode": "577006",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.4800705,
        "longitude": 75.9073702
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
        }
    ],
    "sameAs": [
        "https://markcomputers.in"
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.variable}>
                <Navbar />
                {children}
                <Footer />
                <FloatingCallButton />
            </body>
        </html>
    );
}
