import React from 'react';
import { ClientData } from '@/types';
import { Line, Doughnut } from 'react-chartjs-2';
import { Lightbulb } from 'lucide-react';
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

interface TrafficViewProps {
    data: ClientData;
}

const TrafficView: React.FC<TrafficViewProps> = ({ data }) => {
    const trafficChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Users',
                data: data.dashboard.traffic.chart,
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
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
            y: { beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
            x: { grid: { display: false } }
        },
        elements: {
            point: { radius: 3 }
        }
    };

    const deviceChartData = {
        labels: ['Mobile', 'Desktop'],
        datasets: [
            {
                data: data.dashboard.devices,
                backgroundColor: ['#3B82F6', '#10B981'],
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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 glass-card p-6">
                    <h3 className="text-xl font-semibold text-app-text mb-4">Traffic (Last 7 Days)</h3>
                    <div className="h-[300px] w-full">
                        <Line data={trafficChartData} options={trafficChartOptions} />
                    </div>
                </div>
                <div className="md:col-span-1 space-y-6">
                    <div className="glass-card p-6">
                        <h3 className="text-xl font-semibold text-app-text mb-4">Top Devices</h3>
                        <div className="h-[200px] w-full">
                            <Doughnut data={deviceChartData} options={deviceChartOptions} />
                        </div>
                    </div>
                    <div className="glass-card p-6">
                        <h3 className="text-xl font-semibold text-app-text mb-4">Top Sources</h3>
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
            <div className="glass-card p-6 mt-6 border-l-4 border-app-accent-sec">
                <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-app-accent-sec" />
                    <h3 className="text-xl font-semibold text-app-text">Actionable Insight</h3>
                </div>
                <div
                    className="text-lg text-app-text-sec mt-4 pl-9"
                    dangerouslySetInnerHTML={{ __html: data.traffic.insight }}
                />
            </div>
        </div>
    );
};

export default TrafficView;
