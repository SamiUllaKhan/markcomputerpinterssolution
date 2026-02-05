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
                        <h3 className={styles.footerTitle}>Technology Partners</h3>
                        <ul className={styles.footerLinks}>
                            <li><a href="https://www.hp.com" target="_blank" rel="noopener noreferrer">HP Global Site</a></li>
                            <li><a href="https://www.dell.com" target="_blank" rel="noopener noreferrer">Dell Technologies</a></li>
                            <li><a href="https://www.canon.com" target="_blank" rel="noopener noreferrer">Canon Support</a></li>
                            <li><a href="https://www.lenovo.com" target="_blank" rel="noopener noreferrer">Lenovo Official</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.footerTitle}>Contact Us</h3>
                        <ul className={styles.footerLinks}>
                            <li>S M Krishna Nagara, Vijayanagara, Apache Nagar,</li>
                            <li>Davanagere, Karnataka 577006</li>
                            <li>Phone: +91 87924 10480</li>
                            <li>Email: markcomputerpinterssolution@gmail.com</li>
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
