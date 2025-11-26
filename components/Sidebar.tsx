import React from 'react';
import { LayoutDashboard, HeartPulse, BarChart3, Search, Smartphone, Sparkles, Circle, X } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
    activePage: string;
    setActivePage: (page: string) => void;
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen = false, onClose }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'health', label: 'Site Health', icon: HeartPulse },
        { id: 'traffic', label: 'Traffic (Analytics)', icon: BarChart3 },
        { id: 'seo', label: 'Local SEO (Keywords)', icon: Search },
        { id: 'app', label: 'App Monitoring', icon: Smartphone },
        { id: 'ai', label: 'AI Growth Engine', icon: Sparkles, className: 'text-app-ai' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            <aside className={clsx(
                "bg-app-bg-sec border-r border-app-border flex-shrink-0 flex flex-col p-4 space-y-4 transition-transform duration-300 ease-in-out",
                "fixed inset-y-0 left-0 z-50 w-64", // Mobile: fixed, full height
                "md:relative md:translate-x-0", // Desktop: relative, always visible
                isOpen ? "translate-x-0" : "-translate-x-full" // Mobile toggle state
            )}>
                <div className="flex items-center justify-between px-3">
                    <div className="flex items-center gap-2">
                        <div className="relative w-10 h-10 flex items-center justify-center text-app-accent">
                            <svg className="w-10 h-10 text-app-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <h1 className="text-2xl font-bold text-app-text">Empower<span className="text-app-accent">CC</span></h1>
                    </div>
                    <button onClick={onClose} className="md:hidden text-app-text-sec hover:text-app-text p-1">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActivePage(item.id)}
                            className={clsx(
                                'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200',
                                activePage === item.id
                                    ? 'bg-app-accent text-app-text'
                                    : 'text-app-text-sec hover:text-app-text hover:bg-app-glass',
                                item.className
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="glass-card p-4 text-center">
                    <p className="text-sm text-app-text-sec">A bespoke solution by</p>
                    <p className="font-bold text-lg text-app-text">Empower Digital Solutions</p>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
