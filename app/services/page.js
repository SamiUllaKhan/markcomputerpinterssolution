import styles from '@/styles/Services.module.css';

export const metadata = {
    title: "Our Services | Computer & Printer Repair in Davanagere",
    description: "Professional IT services, computer sales, printer repair, and business automation software in Davanagere, Karnataka.",
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    const services = [
        {
            title: "IT Consulting",
            desc: "Our experts analyze your business infrastructure and recommend the best technology strategies to optimize performance and reduce costs.",
            icon: "💡"
        },
        {
            title: "Installation & Setup",
            desc: "Complete setup of computers, servers, printers, and networking equipment for new offices or upgrades.",
            icon: "⚙️"
        },
        {
            title: "Computer Sales & Service",
            desc: "Premium laptops, desktops, and workstations with authorized warranty and repair services.",
            icon: "💻"
        },
        {
            title: "Printer Repair & Service",
            desc: "Comprehensive diagnostic and repair services for LaserJet, InkJet, and Dot Matrix printers.",
            icon: "🖨️"
        },
        {
            title: "AMC & Maintenance",
            desc: "Annual Maintenance Contracts to ensure your hardware runs smoothly year-round with priority support.",
            icon: "🛠️"
        },
        {
            title: "Software Customization",
            desc: "Tailoring existing software solutions or building custom modules to fit your specific business workflows.",
            icon: "💻"
        },
        {
            title: "Business Automation",
            desc: "Automating repetitive tasks using modern tools to save time and increase accuracy.",
            icon: "🤖"
        },
        {
            title: "Cloud Solutions",
            desc: "Migration to cloud platforms, backup solutions, and remote access configuration.",
            icon: "☁️"
        }
    ];

    return (
        <main className={styles.servicesPage}>
            <header className={styles.header}>
                <div className="container">
                    <h1>Our IT Services</h1>
                    <p>
                        We provide end-to-end technology services to keep your business running smoothly without interruptions.
                        From infrastructure setup to advanced business automation, we have you covered.
                    </p>
                </div>
            </header>

            <div className="container">
                <div className={styles.servicesGrid}>
                    {services.map((s, i) => (
                        <div key={i} className={styles.serviceCard}>
                            <div className={styles.iconBox}>{s.icon}</div>
                            <h3 className={styles.serviceTitle}>{s.title}</h3>
                            <p className={styles.serviceDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>

                <section className={styles.ctaSection}>
                    <h2>Need a Custom Service Plan?</h2>
                    <p>Contact us today to discuss your specific requirements and get a tailored solution for your business.</p>
                    <a href="/contact" className="btn btn-large">Contact Us Today</a>
                </section>
            </div>
        </main>
    );
}
