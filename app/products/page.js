import Link from 'next/link';
import styles from '@/styles/Products.module.css';

export const metadata = {
    title: "Products | Laptops, Printers & Peripherals in Davanagere",
    description: "Browse our range of high-performance Desktops, Laptops, Printers, and Accessories available in Davanagere, Karnataka.",
    alternates: {
        canonical: "/products",
    },
};

const products = [
    {
        category: "Laptops & Portables",
        items: [
            { name: "Business Pro Series", desc: "Reliable laptops optimized for office productivity and high endurance.", icon: "💻" },
            { name: "Performance Gaming", desc: "High-performance machines with high-end graphics for creators and gamers.", icon: "🎮" },
            { name: "Premium Ultrabooks", desc: "Thin, light, and powerful devices for professionals on the go.", icon: "✨" },
        ]
    },
    {
        category: "Desktops & Workstations",
        items: [
            { name: "Corporate Office PC", desc: "Compact and efficient desktop solutions for daily business tasks.", icon: "🖥️" },
            { name: "Graphic Workstations", desc: "Professional-grade power for rendering, 3D modeling, and video editing.", icon: "🏗️" },
            { name: "Sleek All-in-Ones", desc: "Modern, clutter-free designs with integrated high-resolution displays.", icon: "🖥️" },
        ]
    },
    {
        category: "Printers & Business Gear",
        items: [
            { name: "High-Speed Laser Printers", desc: "Efficient, high-volume printing solutions for modern offices.", icon: "🖨️" },
            { name: "Enterprise Networking", desc: "Secure and stable routers, switches, and structured cabling solutions.", icon: "🌐" },
            { name: "Premium Peripherals", desc: "Ergonomic keyboards, high-precision mice, and HD webcams.", icon: "🖱️" },
        ]
    }
];

export default function ProductsPage() {
    return (
        <main className={styles.productsContainer}>
            <header className={styles.header}>
                <div className="container">
                    <h1>Our Products</h1>
                    <p>
                        High-quality hardware and technology solutions from leading global brands
                        including HP, Dell, Lenovo, and Canon.
                    </p>
                </div>
            </header>

            <div className="container">
                {products.map((section, idx) => (
                    <section key={idx} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>
                            {section.category}
                        </h2>
                        <div className={styles.productGrid}>
                            {section.items.map((item, i) => (
                                <div key={i} className={styles.productCard}>
                                    <div className={styles.imageOverlay}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.productContent}>
                                        <h3 className={styles.productName}>{item.name}</h3>
                                        <p className={styles.productDesc}>{item.desc}</p>
                                        <Link
                                            href={`/contact?subject=Inquiry about ${item.name}`}
                                            className={styles.enquireBtn}
                                        >
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
