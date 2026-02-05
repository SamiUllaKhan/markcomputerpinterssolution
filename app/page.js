import Hero from '@/components/Hero';
import Link from 'next/link';
import homeStyles from '@/styles/Home.module.css';

export const metadata = {
    title: "Best Computer & Printer Service in Davanagere | Sales & IT Support",
    description: "Authorized Sales and Expert Repair Service for Laptops, Printers, and Desktops in Davanagere, Karnataka. 10+ years of technical excellence.",
};

export default function Home() {
    return (
        <main>
            <Hero />

            {/* Services Highlights */}
            <section className={homeStyles.servicesHighlight}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Comprehensive Services</h2>
                        <p style={{ color: 'var(--text-light)' }}>One-stop shop for all your technology needs</p>
                    </div>

                    <div className={homeStyles.serviceHighlightGrid}>
                        {[
                            { title: 'Computer Sales and Service', desc: 'Expert sales and repair services for Laptops, Desktops, and Workstations.', icon: '💻' },
                            { title: 'Printer Sales and Service', desc: 'Authorized sales and maintenance for all major printer brands.', icon: '🖨️' },
                            { title: 'ERP Software', desc: 'Customized Business Management software to streamline operations.', icon: '📊' },
                            { title: 'IT Consulting', desc: 'Expert advice on infrastructure, security, and digital transformation.', icon: '💡' },
                            { title: 'Maintenance', desc: 'Annual Maintenance Contracts (AMC) to keep your systems running.', icon: '🛠️' },
                        ].map((item, index) => (
                            <div key={index} className={homeStyles.highlightCard}>
                                <div className={homeStyles.highlightIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <Link href="/services" className={homeStyles.learnMore}>Learn more →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modern Why Choose Us Section */}
            <section className={homeStyles.whyChooseUs}>
                <div className="container">
                    <div className={homeStyles.sectionHeader}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Why Choose Us?</h2>
                        <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                            We combine deep technical expertise with a customer-centric approach to deliver excellence in every project.
                        </p>
                    </div>

                    <div className={homeStyles.featureGrid}>
                        {[
                            { title: '10+ Years Experience', desc: 'A decade of delivering robust IT solutions across various industries.', icon: '🏆' },
                            { title: 'Expert Team', desc: 'Passion-driven certified professionals committed to your success.', icon: '👨‍💻' },
                            { title: '24/7 Support', desc: 'Round-the-clock technical assistance to keep your business running.', icon: '🕒' },
                            { title: 'Authorized Partner', desc: 'Official dealer for top-tier computer and printer hardware brands.', icon: '🤝' },
                        ].map((feature, i) => (
                            <div key={i} className={homeStyles.featureCard}>
                                <div className={homeStyles.iconWrapper}>{feature.icon}</div>
                                <h3 className={homeStyles.featureTitle}>{feature.title}</h3>
                                <p className={homeStyles.featureDesc}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={homeStyles.statsContainer}>
                        <div className={homeStyles.statItem}>
                            <h3>500+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className={homeStyles.statItem}>
                            <h3>1000+</h3>
                            <p>Projects Done</p>
                        </div>
                        <div className={homeStyles.statItem}>
                            <h3>24/7</h3>
                            <p>Live Support</p>
                        </div>
                        <div className={homeStyles.statItem}>
                            <h3>100%</h3>
                            <p>Satisfaction</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <Link href="/about" className="btn">Learn More About Us</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
