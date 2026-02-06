import Link from 'next/link';
import styles from '@/styles/Software.module.css';

export const metadata = {
    title: "Software Solutions - ERP, CRM, Billing | Mark Computer and Printer Solutions",
    description: "Boost efficiency with our ERP, Accounting, and Business Management Software in Davanagere.",
    alternates: {
        canonical: "/software",
    },
};

export default function SoftwarePage() {
    return (
        <main className={styles.softwarePage}>
            <header className={styles.hero}>
                <div className="container">
                    <h1>Software Solutions</h1>
                    <p>
                        Empowering your business with smarter automation. From Enterprise Resource Planning
                        to GST-ready billing, we provide software that grows with you.
                    </p>
                </div>
            </header>

            <section className="container">
                <div className={styles.solutionSection}>

                    {/* Solution 1: ERP */}
                    <div className={styles.alternatingRow}>
                        <div className={styles.textContent}>
                            <div className={styles.iconBox}>📊</div>
                            <h2>Advanced ERP Systems</h2>
                            <p>
                                A comprehensive Enterprise Resource Planning system designed to centralize and
                                streamline every aspect of your business operations.
                            </p>
                            <ul className={styles.featureList}>
                                <li>Real-time Inventory Tracking</li>
                                <li>Automated HR & Payroll Processing</li>
                                <li>Supplier Chain Optimization</li>
                                <li>Business Intelligence Dashboards</li>
                            </ul>
                            <Link href="/contact?subject=ERP Demo Request" className="btn btn-large">
                                Request Free Demo
                            </Link>
                        </div>
                        <div className={styles.visualContent}>
                            <div className={styles.visualPlaceholder}>🏢</div>
                        </div>
                    </div>

                    {/* Solution 2: Billing */}
                    <div className={styles.alternatingRow}>
                        <div className={styles.textContent}>
                            <div className={styles.iconBox}>🧾</div>
                            <h2>Smart Billing & Accounting</h2>
                            <p>
                                Professional, GST-compliant billing software tailored for Indian retail and
                                wholesale businesses. Simple to learn, yet powerful enough to manage your finances.
                            </p>
                            <ul className={styles.featureList}>
                                <li>One-click GST Invoicing</li>
                                <li>Automated Financial Reporting</li>
                                <li>Stock & Expiry Management</li>
                                <li>Barcode Generation & Integration</li>
                            </ul>
                            <Link href="/contact?subject=Billing Software Inquiry" className="btn btn-large">
                                Explore Features
                            </Link>
                        </div>
                        <div className={styles.visualContent}>
                            <div className={styles.visualPlaceholder}>💰</div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
