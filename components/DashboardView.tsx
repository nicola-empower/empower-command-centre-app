import React from 'react';
import { Users, Mail, Calendar } from 'lucide-react';
import { ClientData } from '@/types';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import clsx from 'clsx';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
);

interface DashboardViewProps {
    data: ClientData;
    setActivePage: (page: string) => void;
    openHealthModal: () => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ data, setActivePage, openHealthModal }) => {
    const trafficChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Users',
                data: data.dashboard.traffic.chart,
                borderColor: '#4F46E5', // Indigo 600
                backgroundColor: 'rgba(79, 70, 229, 0.1)', // Indigo 600 with opacity
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const trafficChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { display: false },
            y: { display: false },
        },
        elements: {
            point: { radius: 0 }
        }
    };

    const deviceChartData = {
        labels: ['Mobile', 'Desktop'],
        datasets: [
            {
                data: data.dashboard.devices,
                backgroundColor: ['#4F46E5', '#10B981'], // Indigo 600, Emerald 500
                borderWidth: 0,
            },
        ],
    };

    const deviceChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' as const, labels: { color: '#9CA3AF' } },
        },
        cutout: '70%',
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-6">
                {/* Health & Traffic */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="glass-card p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-app-text">Site Health</h3>
                            <button onClick={() => setActivePage('health')} className="text-sm text-app-accent font-medium hover:underline">View Details</button>
                        </div>
                        <div className="text-center">
                            <div className="inline-block relative">
                                <span className={clsx(
                                    "text-6xl font-bold",
                                    data.dashboard.healthScore < 70 ? 'text-app-alert' : (data.dashboard.healthScore < 90 ? 'text-amber-600' : 'text-app-accent-sec')
                                )}>
                                    {data.dashboard.healthScore}
                                </span>
                            </div>
                            <p className="text-lg font-medium text-app-alert mt-2">
                                {data.dashboard.healthIssues} Critical Issue{data.dashboard.healthIssues === 1 ? '' : 's'} Found
                            </p>
                            <button
                                className="bg-app-accent text-white w-full mt-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                                onClick={openHealthModal}
                            >
                                View & Fix Issues
                            </button>
                        </div>
                    </div>

                    <div className="glass-card p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-app-text">Live Traffic</h3>
                            <button onClick={() => setActivePage('traffic')} className="text-sm text-app-accent font-medium hover:underline">View Details</button>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-app-text">{data.dashboard.traffic.users.toLocaleString('en-GB')}</span>
                            <span className={clsx(
                                "text-lg font-medium",
                                data.dashboard.traffic.change >= 0 ? 'text-app-accent-sec' : 'text-app-alert'
                            )}>
                                {data.dashboard.traffic.change >= 0 ? '▲' : '▼'} {Math.abs(data.dashboard.traffic.change)}%
                            </span>
                        </div>
                        <p className="text-sm text-app-text-sec mb-4">vs. last 7 days</p>
                        <div className="h-[150px] w-full">
                            <Line data={trafficChartData} options={trafficChartOptions} />
                        </div>
                    </div>
                </div>

                {/* Phantom Cards */}
                <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-app-text mb-4">Connect Your Other Tools</h3>
                    <p className="text-sm text-app-text-sec mb-6">Your Command Centre can be expanded to pull in data from all your business-critical apps.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="phantom-card p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-2">
                            <Users className="w-10 h-10 text-app-text-sec" />
                            <p className="font-semibold text-app-text-sec">Connect CRM</p>
                            <span className="text-xs font-medium text-white bg-gray-500 px-2 py-0.5 rounded-full">Coming Soon</span>
                        </div>
                        <div className="phantom-card p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-2">
                            <Mail className="w-10 h-10 text-app-text-sec" />
                            <p className="font-semibold text-app-text-sec">Connect Mailchimp</p>
                            <span className="text-xs font-medium text-app-text bg-gray-700 px-2 py-0.5 rounded-full">Coming Soon</span>
                        </div>
                        <div className="phantom-card p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-2">
                            <Calendar className="w-10 h-10 text-app-text-sec" />
                            <p className="font-semibold text-app-text-sec">Connect Booking</p>
                            <span className="text-xs font-medium text-app-text bg-gray-700 px-2 py-0.5 rounded-full">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-1 space-y-6">
                <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-app-text mb-4">Top Devices</h3>
                    <div className="h-[200px] w-full">
                        <Doughnut data={deviceChartData} options={deviceChartOptions} />
                    </div>
                </div>
                <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-app-text mb-4">Top Traffic Sources</h3>
                    <ul className="space-y-3">
                        {data.dashboard.sources.map((source, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span className="text-sm font-medium text-app-text-sec">{source.name}</span>
                                <span className="text-sm font-semibold text-app-text">{source.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
