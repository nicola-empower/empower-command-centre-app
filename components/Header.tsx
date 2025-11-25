import React from 'react';
import { Download } from 'lucide-react';
import { ClientId, CLIENT_IDS } from '@/types';
import { clientData } from '@/data/clients';

interface HeaderProps {
    title: string;
    activeClient: ClientId;
    setActiveClient: (client: ClientId) => void;
}

const Header: React.FC<HeaderProps> = ({ title, activeClient, setActiveClient }) => {
    return (
        <header className="bg-app-bg-sec border-b border-app-border p-4 flex justify-between items-center flex-shrink-0 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-app-text">{title}</h2>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="client-switcher" className="text-sm font-medium text-app-text-sec">View As:</label>
                    <select
                        id="client-switcher"
                        value={activeClient}
                        onChange={(e) => setActiveClient(e.target.value as ClientId)}
                        className="bg-app-bg border border-app-border text-app-text text-sm rounded-lg focus:ring-app-accent focus:border-app-accent block w-full p-2"
                    >
                        {CLIENT_IDS.map((id) => (
                            <option key={id} value={id}>
                                {clientData[id].name}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="bg-app-bg-sec border border-app-border text-app-text-sec hover:text-app-text hover:bg-app-glass flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors">
                    <Download className="w-4 h-4" />
                    Export Report
                </button>
            </div>
        </header>
    );
};

export default Header;
