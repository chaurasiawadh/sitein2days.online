'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Loader2, Sparkles, Lock, Mail, AlertCircle } from 'lucide-react';
import { adminLogin } from '../actions';
import Link from 'next/link';

function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            style={{
                width: '100%',
                backgroundColor: '#000',
                color: '#fff',
                fontWeight: 600,
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#000')}
        >
            {pending ? (
                <>
                    <Loader2 size={16} className="animate-spin" /> Signing in...
                </>
            ) : (
                <>
                    <Lock size={14} /> Sign In
                </>
            )}
        </button>
    );
}

export default function AdminLoginPage() {
    const [state, formAction] = useFormState(adminLogin, { success: false, message: null });

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 50,
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '360px',
                }}
            >
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <Link
                        href="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#fff',
                                padding: '6px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Sparkles size={16} fill="#ccf381" style={{ color: '#000' }} />
                        </div>
                        <span style={{ fontWeight: 900, fontSize: '18px', color: '#fff' }}>
                            Zenitho<span style={{ color: '#888', fontWeight: 400 }}>Labs</span>
                        </span>
                    </Link>
                </div>

                {/* Login Card */}
                <div
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        padding: '32px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                backgroundColor: '#f3f4f6',
                                borderRadius: '50%',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '12px',
                            }}
                        >
                            <Lock size={20} style={{ color: '#374151' }} />
                        </div>
                        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#111', margin: 0 }}>
                            Admin Portal
                        </h1>
                        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
                            Sign in to access dashboard
                        </p>
                    </div>

                    {/* Error Message */}
                    {state.message && !state.success && (
                        <div
                            style={{
                                backgroundColor: '#fef2f2',
                                border: '1px solid #fecaca',
                                color: '#dc2626',
                                padding: '10px 12px',
                                borderRadius: '8px',
                                marginBottom: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '13px',
                            }}
                        >
                            <AlertCircle size={16} />
                            {state.message}
                        </div>
                    )}

                    {/* Form */}
                    <form action={formAction}>
                        <div style={{ marginBottom: '16px' }}>
                            <label
                                style={{
                                    display: 'block',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: '#374151',
                                    marginBottom: '6px',
                                }}
                            >
                                Email
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Mail
                                    size={16}
                                    style={{
                                        position: 'absolute',
                                        left: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#9ca3af',
                                    }}
                                />
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="admin@zenitholabs.com"
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px 10px 38px',
                                        backgroundColor: '#f9fafb',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        color: '#111',
                                        outline: 'none',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label
                                style={{
                                    display: 'block',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: '#374151',
                                    marginBottom: '6px',
                                }}
                            >
                                Password
                            </label>
                            <div style={{ position: 'relative' }}>
                                <Lock
                                    size={16}
                                    style={{
                                        position: 'absolute',
                                        left: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#9ca3af',
                                    }}
                                />
                                <input
                                    required
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px 10px 38px',
                                        backgroundColor: '#f9fafb',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        color: '#111',
                                        outline: 'none',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                        </div>

                        <LoginButton />
                    </form>

                    {/* Back Link */}
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                        <Link
                            href="/"
                            style={{
                                fontSize: '13px',
                                color: '#6b7280',
                                textDecoration: 'none',
                            }}
                        >
                            ← Back to website
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '11px', marginTop: '16px' }}>
                    © {new Date().getFullYear()} ZenithoLabs
                </p>
            </div>
        </div>
    );
}
