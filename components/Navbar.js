"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Mark Computer and Printer Solutions"
                        width={200}
                        height={60}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Link>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    <li><Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/products" className={styles.navLink} onClick={() => setIsOpen(false)}>Products</Link></li>
                    <li><Link href="/software" className={styles.navLink} onClick={() => setIsOpen(false)}>Software</Link></li>
                    <li><Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About Us</Link></li>
                    <li><Link href="/contact" className="btn" onClick={() => setIsOpen(false)}>Get a Quote</Link></li>
                </ul>
            </div>
        </nav>
    );
}
