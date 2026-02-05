import styles from '@/styles/About.module.css';

export const metadata = {
    title: "About Us | Leading IT Service Provider in Davanagere",
    description: "Learn more about Mark Computer and Printer Solutions, providing authorized computer sales and printer services in Davanagere since 2015.",
};

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            <header className={styles.hero}>
                <div className="container">
                    <h1>Our Story</h1>
                    <p>
                        Empowering businesses in Davanagere and beyond with cutting-edge
                        technology solutions since 2015.
                    </p>
                </div>
            </header>

            <div className="container">
                <section className={styles.introSection}>
                    <div className={styles.visualContent}>
                        <span>👨‍💻</span>
                    </div>
                    <div className={styles.textContent}>
                        <h2>Who We Are</h2>
                        <p>
                            Mark Computer and Printer Solutions is a premier IT infrastructure and software
                            provider dedicated to serving small and medium businesses. We believe that
                            technology should be an enabler, not a hurdle.
                        </p>
                        <p>
                            Our team consists of certified network engineers, software developers, and
                            hardware specialists who are passionate about solving complex business
                            problems with simple, effective solutions.
                        </p>
                        <div className={styles.missionCard}>
                            <h3>Our Mission</h3>
                            <p>
                                To provide reliable, affordable, and cutting-edge technology solutions
                                that help businesses achieve their full potential through innovation
                                and dedicated support.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.valuesSection}>
                    <h2>Our Core Values</h2>
                    <div className={styles.valuesGrid}>
                        {[
                            { title: "Customer First", desc: "We prioritize your needs and budget over everything else, ensuring every solution fits your unique context.", icon: "🤝" },
                            { title: "Rapid Support", desc: "Our local support team is always just a call away, ready to minimize your downtime and keep you running.", icon: "⚡" },
                            { title: "Quality Assurance", desc: "We only deal in genuine products and rigorously tested software to ensure long-term reliability.", icon: "💎" }
                        ].map((item, i) => (
                            <div key={i} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
