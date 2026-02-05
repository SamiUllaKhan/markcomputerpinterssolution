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
                        <Link href="/services" className="btn btn-outline">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
