import React, { useState } from 'react';
import { ClientData, Issue } from '@/types';
import clsx from 'clsx';
import { Loader2, Search } from 'lucide-react';

interface HealthViewProps {
    data: ClientData;
    openIssueModal: (issue: Issue) => void;
    openHealthModal: () => void;
    onAnalyzeUrl: (url: string) => Promise<void>;
}

const HealthView: React.FC<HealthViewProps> = ({ data, openIssueModal, openHealthModal, onAnalyzeUrl }) => {
    const [url, setUrl] = useState('');
    const [analyzing, setAnalyzing] = useState(false);

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setAnalyzing(true);
        try {
            await onAnalyzeUrl(url);
        } finally {
            setAnalyzing(false);
        }
    };

    return (
        <div className="space-y-8">
            <h3 className="text-lg font-semibold text-app-text-sec uppercase tracking-wider mb-4">Site Health Report</h3>

            {/* URL Analyzer Input */}
            <div className="glass-card p-6 mb-8">
                <h4 className="text-lg font-semibold text-app-text mb-4">Real-Time Analysis</h4>
                <form onSubmit={handleAnalyze} className="flex gap-4">
                    <input
                        type="url"
                        placeholder="Enter website URL (e.g. https://example.com)"
                        className="flex-1 bg-app-bg border border-app-border rounded-lg px-4 py-2 text-app-text focus:ring-2 focus:ring-app-accent outline-none"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-app-accent text-app-text px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                        disabled={analyzing}
                    >
                        {analyzing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                        {analyzing ? 'Analyzing...' : 'Analyze'}
                    </button>
                </form>
                <p className="text-sm text-app-text-sec mt-2">Powered by Google PageSpeed Insights API</p>
            </div>

            <div className="glass-card p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 text-center">
                    <div className="inline-block relative">
                        <span className={clsx(
                            "text-8xl font-bold",
                            data.health.score < 70 ? 'text-app-alert' : (data.health.score < 90 ? 'text-yellow-400' : 'text-app-accent-sec')
                        )}>
                            {data.health.score}
                        </span>
                    </div>
                    <p className="text-xl font-medium text-app-text-sec mt-2">Overall Site Score</p>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-2xl font-semibold text-app-text mb-4">Actionable Insights</h4>
                    <p className="text-lg text-app-text-sec mb-6">Your score is based on automated tests. Fixing these issues will dramatically improve your site speed, user experience, and Google ranking.</p>
                    <button
                        className="bg-app-accent text-app-text w-full md:w-auto px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        onClick={openHealthModal}
                    >
                        View & Fix {data.health.issues.length} Critical Issue{data.health.issues.length === 1 ? '' : 's'}
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-app-text-sec uppercase tracking-wider mb-4 mt-8">Full Issue List</h3>
                <div className="glass-card divide-y divide-app-border overflow-hidden">
                    {data.health.issues.map((issue) => (
                        <div key={issue.id} className="p-4 flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold text-app-text">{issue.title}</p>
                                <span className={clsx(
                                    "px-2 py-0.5 rounded-full text-xs font-medium",
                                    issue.severity === 'Critical' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                                )}>
                                    {issue.severity}
                                </span>
                            </div>
                            <button
                                className="bg-app-bg-sec border border-app-border text-app-text-sec hover:text-app-text hover:bg-app-glass px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                onClick={() => openIssueModal(issue)}
                            >
                                View Fix
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HealthView;

