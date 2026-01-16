import React, { useState } from 'react';
import { ClientData } from '@/types';
import { FileText, Lightbulb, Loader2 } from 'lucide-react';

interface AiViewProps {
    data: ClientData;
    onGenerateBlog: () => Promise<void>;
    onGenerateStrategy: () => Promise<void>;
}

const AiView: React.FC<AiViewProps> = ({ data, onGenerateBlog, onGenerateStrategy }) => {
    const [loadingBlog, setLoadingBlog] = useState(false);
    const [loadingStrategy, setLoadingStrategy] = useState(false);

    const handleBlogClick = async () => {
        setLoadingBlog(true);
        try {
            await onGenerateBlog();
        } finally {
            setLoadingBlog(false);
        }
    };

    const handleStrategyClick = async () => {
        setLoadingStrategy(true);
        try {
            await onGenerateStrategy();
        } finally {
            setLoadingStrategy(false);
        }
    };

    return (
        <div>
            <h3 className="text-lg font-semibold text-app-text-sec uppercase tracking-wider mb-4">AI Growth Engine</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI Blog Post Generator */}
                <div className="glass-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-6 h-6 text-app-ai" />
                        <h3 className="text-xl font-semibold text-app-text">AI Blog Post Generator</h3>
                    </div>
                    <p className="text-app-text-sec mb-4">Generate SEO-optimised content based on your top-performing keywords to attract new customers.</p>
                    <div className="space-y-3 mb-6">
                        <label className="text-sm font-medium text-app-text-sec">Target Keyword</label>
                        <div className="bg-app-bg border border-app-border rounded-lg px-4 py-3 text-app-text text-lg font-mono">
                            {data.seo.keywords[0].term}
                        </div>
                    </div>
                    <button
                        className="bg-app-ai text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        onClick={handleBlogClick}
                        disabled={loadingBlog}
                    >
                        {loadingBlog ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                        {loadingBlog ? 'Generating...' : 'Generate Blog Post'}
                    </button>
                </div>

                {/* AI Strategy Generator */}
                <div className="glass-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Lightbulb className="w-6 h-6 text-app-ai" />
                        <h3 className="text-xl font-semibold text-app-text">AI Strategy Advisor</h3>
                    </div>
                    <p className="text-app-text-sec mb-4">Get a plain-English, step-by-step action plan based on all your site data to improve traffic and conversions.</p>
                    <div className="space-y-3 mb-6">
                        <label className="text-sm font-medium text-app-text-sec">Data Points to Analyse</label>
                        <div className="bg-app-bg border border-app-border rounded-lg px-4 py-3 text-app-text text-sm font-mono leading-relaxed">
                            Site Health: {data.health.score}<br />
                            Traffic: {data.dashboard.traffic.users} ( {data.dashboard.devices[0]}% Mobile)<br />
                            Top Keyword: "{data.seo.keywords[0].term}"
                        </div>
                    </div>
                    <button
                        className="bg-app-ai text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        onClick={handleStrategyClick}
                        disabled={loadingStrategy}
                    >
                        {loadingStrategy ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                        {loadingStrategy ? 'Thinking...' : 'Get AI Strategy'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AiView;
