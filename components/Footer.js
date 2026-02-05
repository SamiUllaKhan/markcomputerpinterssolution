import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div>
                        <h3 className={styles.footerTitle}>Mark Computer and Printer Solutions</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            Your trusted partner for comprehensive IT hardware and software solutions.
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.footerTitle}>Quick Links</h3>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/software">Software Solutions</Link></li>
                            <li><Link href="/services">IT Services</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.footerTitle}>Contact</h3>
                        <ul className={styles.footerLinks}>
                            <li>S M Krishna Nagara, Vijayanagara, Apache Nagar,</li>
                            <li>Davanagere, Karnataka 577006</li>
                            <li>+91 87924 10480</li>
                            <li>markcomputerpinterssolution@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Mark Computer and Printer Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
