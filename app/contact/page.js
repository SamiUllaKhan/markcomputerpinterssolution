import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact Mark Computer and Printer Solutions | Davanagere Office",
    description: "Visit our office in Davanagere, Karnataka or contact us for expert computer and printer services and sales.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <main className="container">
            <header style={{ padding: '60px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ color: 'var(--text-light)' }}>We'd love to hear from you. Fill out the form below or visit us.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>

                {/* Contact Info */}
                <div>
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Visit Our Office</h3>
                        <p style={{ marginBottom: '5px' }}>S M Krishna Nagara, Vijayanagara,</p>
                        <p>Apache Nagar, Davanagere, Karnataka 577006</p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Talk to Us</h3>
                        <p style={{ marginBottom: '10px' }}>Phone: +91 87924 10480</p>
                        <a href="tel:+918792410480" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Call Now
                        </a>
                        <p style={{ marginTop: '15px' }}>Email: markcomputerpinterssolution@gmail.com</p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Business Hours</h3>
                        <p style={{ marginBottom: '5px' }}>Mon - Fri: 9:00 AM - 7:00 PM</p>
                        <p>Sat: 10:00 AM - 4:00 PM</p>
                        <p>Sun: Closed</p>
                    </div>

                    {/* Map Box */}
                    <div style={{ width: '100%', height: '300px', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.0804360713328!2d75.9073702!3d14.480070500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba258c207eebd9%3A0x607324fcaf88542b!2sMark%20Computer%20And%20Printer%20Solutions!5e0!3m2!1sen!2sin!4v1770286410230!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form Component */}
                <Suspense fallback={<div>Loading form...</div>}>
                    <ContactForm />
                </Suspense>

            </div>
        </main>
    );
}
