"use client";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
    const searchParams = useSearchParams();
    const initialSubject = searchParams.get('subject') || 'General Inquiry';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: initialSubject,
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatePhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, error: null });

        if (!validatePhone(formData.phone)) {
            setStatus({ loading: false, success: null, error: 'Please enter a valid 10-digit phone number.' });
            return;
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus({ loading: false, success: 'Message sent successfully! We will get back to you shortly.', error: null });
                setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
            } else {
                const data = await res.json();
                setStatus({ loading: false, success: null, error: data.error || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ loading: false, success: null, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <div style={{ background: 'var(--section-bg)', padding: '40px', borderRadius: 'var(--radius)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email ID"
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Contact Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Subject</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option>General Inquiry</option>
                        <option>Quote Inquiry</option>
                        <option>Technical Support</option>
                        <option>Demo Request</option>
                    </select>
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                    <textarea
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn"
                    style={{ width: '100%', opacity: status.loading ? 0.7 : 1 }}
                    disabled={status.loading}
                >
                    {status.loading ? 'Sending...' : 'Send Message'}
                </button>

                {status.success && (
                    <div style={{ marginTop: '20px', padding: '10px', background: '#d4edda', color: '#155724', borderRadius: '4px' }}>
                        {status.success}
                    </div>
                )}
                {status.error && (
                    <div style={{ marginTop: '20px', padding: '10px', background: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
                        {status.error}
                    </div>
                )}
            </form>
        </div>
    );
}
