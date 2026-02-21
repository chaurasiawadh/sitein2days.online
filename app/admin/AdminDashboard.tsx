'use client';

import React, { useState } from 'react';
import {
    LogOut,
    Lock,
    Home,
    Sparkles,
    Mail,
    Phone,
    Building,
    Calendar,
    MessageSquare,
    Users,
    Search,
    Eye,
    X,
    Clock,
    LayoutDashboard,
    FileText,
    TrendingUp,
    BarChart3
} from 'lucide-react';
import { adminLogout, Submission } from './actions';

interface AdminDashboardProps {
    submissions: Submission[];
}

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

function formatShortDate(date: Date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });
}

function getInterestLabel(interest: string | null) {
    const labels: Record<string, string> = {
        'web-dev': 'Custom AI Development',
        'shopify': 'Shopify Dev',
        'ai-automation': 'AI Automation',
        'documentation': 'Documentation',
        'profitability': 'Profitability',
        'growth': 'Growth & Mktg',
        'other': 'Other',
        'Web Development': 'Custom AI Development',
        'AI Automation': 'AI Automation',
        'Full Transformation': 'Transformation',
        'Other': 'Other',
    };
    return interest ? labels[interest] || interest : '—';
}

function getInterestBadgeStyles(interest: string | null) {
    // Returning a style object for inline CSS to ensure it applies correctly
    const base = { padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 500, whiteSpace: 'nowrap' as const };

    const key = interest?.toLowerCase() || '';
    if (key.includes('web') || key.includes('dev')) return { ...base, backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #dbeafe' };
    if (key.includes('shopify')) return { ...base, backgroundColor: '#ecfdf5', color: '#047857', border: '1px solid #d1fae5' };
    if (key.includes('ai') || key.includes('auto')) return { ...base, backgroundColor: '#f5f3ff', color: '#6d28d9', border: '1px solid #ede9fe' };
    if (key.includes('doc')) return { ...base, backgroundColor: '#fffbeb', color: '#b45309', border: '1px solid #fde68a' };
    if (key.includes('growth') || key.includes('mktg')) return { ...base, backgroundColor: '#fdf2f8', color: '#be185d', border: '1px solid #fce7f3' };

    return { ...base, backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb' };
}

export default function AdminDashboard({ submissions }: AdminDashboardProps) {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'submissions'>('dashboard');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

    const filteredSubmissions = submissions.filter(sub => {
        const query = searchQuery.toLowerCase();
        return (
            sub.name.toLowerCase().includes(query) ||
            sub.email.toLowerCase().includes(query) ||
            (sub.company?.toLowerCase().includes(query) ?? false)
        );
    });

    // Stats calculations
    const totalSubmissions = submissions.length;
    const thisMonth = submissions.filter(s => {
        const date = new Date(s.createdAt);
        const now = new Date();
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).length;
    const thisWeek = submissions.filter(s => {
        const date = new Date(s.createdAt);
        const now = new Date();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return date >= weekAgo;
    }).length;

    // Interest breakdown
    const interestBreakdown = submissions.reduce((acc, s) => {
        const interest = s.interest || 'other';
        acc[interest] = (acc[interest] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-sans text-gray-900">
            {/* Sidebar - Fixed Width, Fixed Styling */}
            <aside className="w-64 flex-shrink-0 bg-gray-900 text-gray-200 flex flex-col h-full shadow-xl z-20">
                {/* Logo Area */}
                <div className="h-16 flex items-center px-6 bg-black border-b border-white/10">
                    <div className="bg-[#ccf381] p-1.5 rounded-lg mr-3 shadow-[0_0_15px_rgba(204,243,129,0.3)]">
                        <Sparkles size={16} className="text-black" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-white text-lg tracking-tight">Zenitho<span className="font-normal text-gray-400">Labs</span></span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
                    <div className="px-3 mb-3 text-xs font-bold text-gray-500 uppercase tracking-widest">Overview</div>

                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === 'dashboard'
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </button>

                    <button
                        onClick={() => setActiveTab('submissions')}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === 'submissions'
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        <FileText size={18} />
                        Submissions
                        {totalSubmissions > 0 && (
                            <span className="ml-auto bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {totalSubmissions}
                            </span>
                        )}
                    </button>
                    <a
                        href="/"
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-gray-400 hover:bg-white/10 hover:text-white"
                    >
                        <Home size={18} />
                        Home Page
                    </a>
                </nav>

                {/* User Profile */}
                <div className="p-4 bg-black border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm ring-2 ring-indigo-400/30">
                            A
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-semibold text-white truncate">Administrator</p>
                            <p className="text-xs text-gray-400 truncate">admin@zenitholabs.com</p>
                        </div>
                    </div>
                    <form action={adminLogout}>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-gray-400 rounded-lg text-xs font-medium transition-all border border-white/5 hover:border-red-500/20"
                        >
                            <LogOut size={14} />
                            Sign Out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content - Flex Grow to fill rest of screen */}
            <main className="flex-1 flex flex-col h-full min-w-0 bg-gray-50 relative overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 sticky top-0 flex-shrink-0">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            {activeTab === 'dashboard' ? 'Dashboard Overview' : 'Submission Management'}
                        </h2>
                    </div>
                    {activeTab === 'submissions' && (
                        <div className="relative group">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg text-sm w-64 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-gray-500"
                            />
                        </div>
                    )}
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
                    {/* Width container removed - letting it fill width */}
                    <div className="w-full space-y-6">
                        {activeTab === 'dashboard' ? (
                            <>
                                {/* Stats Grid - Responsive resizing */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <StatsCard
                                        icon={<Users size={22} className="text-white" />}
                                        label="Total Submissions"
                                        value={totalSubmissions}
                                        subtext="All time leads"
                                        color="bg-indigo-500"
                                        bg="bg-white"
                                    />
                                    <StatsCard
                                        icon={<Calendar size={22} className="text-white" />}
                                        label="This Month"
                                        value={thisMonth}
                                        subtext="New inquiries"
                                        color="bg-emerald-500"
                                        bg="bg-white"
                                    />
                                    <StatsCard
                                        icon={<Clock size={22} className="text-white" />}
                                        label="Last 7 Days"
                                        value={thisWeek}
                                        subtext="Recent activity"
                                        color="bg-amber-500"
                                        bg="bg-white"
                                    />
                                    <StatsCard
                                        icon={<TrendingUp size={22} className="text-white" />}
                                        label="Conversion Rate"
                                        value="--%"
                                        subtext="Calculated monthly"
                                        color="bg-rose-500"
                                        bg="bg-white"
                                    />
                                </div>

                                {/* Main Dashboard Widgets - Proper Grid Split */}
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full pb-8">
                                    {/* Interest Breakdown */}
                                    <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                                        <h3 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
                                            <div className="p-1.5 rounded-md bg-gray-100">
                                                <BarChart3 size={16} className="text-gray-800" />
                                            </div>
                                            Service Interest Distribution
                                        </h3>
                                        <div className="space-y-5">
                                            {Object.keys(interestBreakdown).length === 0 ? (
                                                <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
                                                    <BarChart3 size={32} className="mb-2 opacity-20" />
                                                    <p className="text-sm">No data available yet</p>
                                                </div>
                                            ) : (
                                                Object.entries(interestBreakdown)
                                                    .sort((a, b) => b[1] - a[1])
                                                    .map(([interest, count], idx) => (
                                                        <div key={interest} className="group">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="text-sm font-semibold text-gray-800 capitalize flex items-center gap-2">
                                                                    {getInterestLabel(interest)}
                                                                </span>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-xs text-gray-500 font-medium">
                                                                        {Math.round((count / totalSubmissions) * 100)}%
                                                                    </span>
                                                                    <span className="text-sm font-bold text-gray-900 w-6 text-right">{count}</span>
                                                                </div>
                                                            </div>
                                                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                                                <div
                                                                    className={`h-full rounded-full transition-all duration-500 ease-out ${idx === 0 ? 'bg-indigo-500' :
                                                                        idx === 1 ? 'bg-indigo-400' :
                                                                            idx === 2 ? 'bg-indigo-300' : 'bg-gray-400'
                                                                        }`}
                                                                    style={{ width: `${(count / totalSubmissions) * 100}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))
                                            )}
                                        </div>
                                    </div>

                                    {/* Recent Leads */}
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                                                <div className="p-1.5 rounded-md bg-gray-100">
                                                    <Clock size={16} className="text-gray-800" />
                                                </div>
                                                Recent Leads
                                            </h3>
                                            <button
                                                onClick={() => setActiveTab('submissions')}
                                                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                                            >
                                                View all
                                            </button>
                                        </div>

                                        <div className="space-y-1 flex-1 overflow-y-auto pr-2">
                                            {submissions.slice(0, 6).map((sub) => (
                                                <div
                                                    key={sub.id}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer group border border-transparent hover:border-gray-100"
                                                    onClick={() => setSelectedSubmission(sub)}
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-indigo-100 group-hover:to-indigo-200 flex items-center justify-center text-gray-800 group-hover:text-indigo-600 text-sm font-bold flex-shrink-0 transition-all">
                                                        {sub.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-bold text-gray-900 truncate group-hover:text-indigo-900">{sub.name}</p>
                                                        <p className="text-xs text-gray-500 truncate group-hover:text-gray-600">{sub.email}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                                            {formatShortDate(sub.createdAt)}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {submissions.length === 0 && (
                                                <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-sm opacity-60">
                                                    <div className="bg-gray-50 p-3 rounded-full mb-3">
                                                        <Users size={24} />
                                                    </div>
                                                    No recent activity
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            /* Submissions View - Simplified Table with no max-width */
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50/50 border-b border-gray-200">
                                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Interest</th>
                                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Company</th>
                                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {filteredSubmissions.length === 0 ? (
                                                <tr>
                                                    <td colSpan={6} className="px-6 py-32 text-center text-gray-500">
                                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3">
                                                            <Search size={20} />
                                                        </div>
                                                        <p>No results found</p>
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredSubmissions.map((sub) => (
                                                    <tr key={sub.id} className="hover:bg-indigo-50/30 transition-colors group">
                                                        <td className="px-6 py-4 align-middle">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 text-xs font-bold">
                                                                    {sub.name.charAt(0).toUpperCase()}
                                                                </div>
                                                                <span className="text-sm font-semibold text-gray-900">{sub.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 align-middle">
                                                            <span className="text-sm text-gray-800">{sub.email}</span>
                                                        </td>
                                                        <td className="px-6 py-4 align-middle">
                                                            <span style={getInterestBadgeStyles(sub.interest)}>
                                                                {getInterestLabel(sub.interest)}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 align-middle">
                                                            <span className="text-sm text-gray-800 truncate block max-w-[150px]">{sub.company || '—'}</span>
                                                        </td>
                                                        <td className="px-6 py-4 align-middle">
                                                            <span className="text-sm text-gray-500 font-medium">
                                                                {formatDate(sub.createdAt)}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 align-middle text-right">
                                                            <button
                                                                onClick={() => setSelectedSubmission(sub)}
                                                                className="text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1.5 rounded-md transition-all text-xs font-bold border border-transparent hover:border-indigo-100"
                                                            >
                                                                View Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Modal remains mostly the same, ensuring high contrast */}
            {selectedSubmission && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] transition-opacity"
                        onClick={() => setSelectedSubmission(null)}
                    />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-gray-100">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/30">
                            <h3 className="font-bold text-gray-900">Submission Details</h3>
                            <button
                                onClick={() => setSelectedSubmission(null)}
                                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-indigo-200">
                                    {selectedSubmission.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900">{selectedSubmission.name}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{selectedSubmission.company || 'Personal'}</span>
                                        <span className="text-xs text-gray-400">•</span>
                                        <span className="text-xs text-gray-500">{formatDate(selectedSubmission.createdAt)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Contact</p>
                                    <p className="text-sm font-medium text-gray-800">{selectedSubmission.email}</p>
                                    {selectedSubmission.phone && <p className="text-sm text-gray-500 mt-1">{selectedSubmission.phone}</p>}
                                </div>
                                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Interest</p>
                                    <span style={getInterestBadgeStyles(selectedSubmission.interest)}>
                                        {getInterestLabel(selectedSubmission.interest)}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Message</p>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800 text-sm leading-relaxed">
                                    {selectedSubmission.projectDetails || 'No message content.'}
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                            <a
                                href={`mailto:${selectedSubmission.email}`}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-200 transition-all"
                            >
                                <Mail size={16} /> Reply via Email
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Stats Card with solid icon background
function StatsCard({ icon, label, value, subtext, color, bg }: { icon: React.ReactNode, label: string, value: string | number, subtext: string, color: string, bg: string }) {
    return (
        <div className={`${bg} p-6 rounded-2xl shadow-sm border border-gray-200 transition-all hover:shadow-md`}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                    <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
                </div>
                <div className={`p-3 rounded-xl shadow-md ${color}`}>
                    {icon}
                </div>
            </div>
            <p className="text-xs font-medium text-gray-500 bg-gray-50 inline-block px-2 py-1 rounded-md mt-4">
                {subtext}
            </p>
        </div>
    );
}
