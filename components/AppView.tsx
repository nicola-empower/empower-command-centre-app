import React from 'react';
import { ClientData, Alert } from '@/types';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

interface AppViewProps {
    data: ClientData;
    openAlertModal: (alert: Alert) => void;
}

const AppView: React.FC<AppViewProps> = ({ data, openAlertModal }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-app-text-sec uppercase tracking-wider mb-4">App Monitoring</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="glass-card p-6 text-center">
                    <h4 className="text-sm font-medium text-app-text-sec mb-1">Active Users (24h)</h4>
                    <p className="text-4xl font-bold text-app-text">1,204</p>
                </div>
                <div className="glass-card p-6 text-center">
                    <h4 className="text-sm font-medium text-app-text-sec mb-1">Crashes (24h)</h4>
                    <p className="text-4xl font-bold text-app-accent-sec">0</p>
                </div>
                <div className="glass-card p-6 text-center">
                    <h4 className="text-sm font-medium text-app-text-sec mb-1">Avg. Load Time</h4>
                    <p className="text-4xl font-bold text-app-text">1.2s</p>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-app-text-sec uppercase tracking-wider mb-4">Actionable Alerts</h3>
            <div className="glass-card divide-y divide-app-border overflow-hidden">
                {data.app.alerts.length > 0 ? data.app.alerts.map((alert) => (
                    <div key={alert.id} className="p-6 flex flex-col md:flex-row justify-between md:items-center">
                        <div>
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="w-6 h-6 text-app-alert" />
                                <p className="text-xl font-semibold text-app-alert">{alert.title}</p>
                            </div>
                            <span className={clsx(
                                "px-2 py-0.5 rounded-full text-sm font-medium ml-8 inline-block mt-2 md:mt-0",
                                alert.severity.includes('CRITICAL') ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                            )}>
                                {alert.severity}
                            </span>
                            <p className="text-app-text-sec ml-8 mt-2">A high-priority issue affecting user experience or security has been detected.</p>
                        </div>
                        <button
                            className="bg-app-accent text-app-text px-6 py-3 rounded-lg font-semibold mt-4 md:mt-0 hover:opacity-90 transition-opacity"
                            onClick={() => openAlertModal(alert)}
                        >
                            View Fix
                        </button>
                    </div>
                )) : (
                    <div className="p-6 text-center">
                        <CheckCircle className="w-12 h-12 text-app-accent-sec mx-auto mb-4" />
                        <p className="text-xl font-semibold text-app-text">All Systems Nominal</p>
                        <p className="text-app-text-sec">No actionable alerts found. Your app is healthy.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppView;
