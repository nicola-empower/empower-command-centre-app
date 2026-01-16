import React from 'react';
import { Download, Menu } from 'lucide-react';
import { ClientId, CLIENT_IDS } from '@/types';
import { clientData } from '@/data/clients';

interface HeaderProps {
    title: string;
    activeClient: ClientId;
    setActiveClient: (client: ClientId) => void;
    onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, activeClient, setActiveClient, onMenuClick }) => {
    return (
        <header className="backdrop-blur-md bg-white/30 border-b border-white/40 p-4 flex justify-between items-center flex-shrink-0 transition-colors duration-300 sticky top-0 z-30">
            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="md:hidden text-app-text-sec hover:text-app-text p-1 -ml-2"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <h2 className="text-xl md:text-2xl font-semibold text-app-text truncate max-w-[150px] md:max-w-none">{title}</h2>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="client-switcher" className="hidden md:block text-sm font-medium text-app-text-sec">View As:</label>
                    <select
                        id="client-switcher"
                        value={activeClient}
                        onChange={(e) => setActiveClient(e.target.value as ClientId)}
                        className="bg-app-bg border border-app-border text-app-text text-sm rounded-lg focus:ring-app-accent focus:border-app-accent block w-full p-2 max-w-[120px] md:max-w-none"
                    >
                        {CLIENT_IDS.map((id) => (
                            <option key={id} value={id}>
                                {clientData[id].name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="hidden md:flex bg-app-bg-sec border border-app-border text-app-text-sec hover:text-app-text hover:bg-app-glass items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors">
                    <Download className="w-4 h-4" />
                    Export Report
                </button>
            </div>
        </header>
    );
};

export default Header;
