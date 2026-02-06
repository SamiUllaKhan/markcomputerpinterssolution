import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Mark Computer and Printer Solutions<br />
                        <span style={{ color: 'var(--primary-color)' }}>Modern Businesses</span>
                    </h1>
                    <p className={styles.subtitle}>
                        From high-performance hardware to custom ERP software, we provide the technology infrastructure your business needs to grow.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/contact" className="btn">
                            Get Free Quote
                        </Link>
                        <a href="tel:+918792410480" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Call Support
                        </a>
                        <Link href="/services" className={styles.linkUnderline}>
                            Explore Services →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
