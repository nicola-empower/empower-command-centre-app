import React from 'react';
import { ClientData } from '@/types';
import { Sparkles } from 'lucide-react';
import clsx from 'clsx';

interface SeoViewProps {
    data: ClientData;
    setActivePage: (page: string) => void;
}

const SeoView: React.FC<SeoViewProps> = ({ data, setActivePage }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-app-text-sec uppercase tracking-wider mb-4">Local SEO Keyword Rankings</h3>
            <div className="glass-card divide-y divide-app-border overflow-hidden">
                <div className="p-4 bg-app-bg-sec/30 flex items-center text-sm font-medium text-app-text-sec">
                    <div className="flex-1">Keyword / Search Term</div>
                    <div className="w-24 text-center">Position</div>
                    <div className="w-24 text-center">Change (7d)</div>
                </div>
                {data.seo.keywords.map((kw, index) => (
                    <div key={index} className="p-4 flex items-center">
                        <div className="flex-1 text-lg font-semibold text-app-text">{kw.term}</div>
                        <div className="w-24 text-center text-2xl font-bold text-app-text">{kw.pos}</div>
                        <div className={clsx(
                            "w-24 text-center text-lg font-medium",
                            kw.change > 0 ? 'text-app-accent-sec' : (kw.change < 0 ? 'text-app-alert' : 'text-app-text-sec')
                        )}>
                            {kw.change > 0 ? `▲ ${kw.change}` : (kw.change < 0 ? `▼ ${Math.abs(kw.change)}` : '—')}
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-card p-6 mt-6 border-l-4 border-app-ai">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-app-ai" />
                    <h3 className="text-xl font-semibold text-app-text">AI Content Generation</h3>
                </div>
                <p className="text-lg text-app-text-sec mt-4 pl-9 mb-6">Use your top-performing keywords to generate SEO-rich blog content and attract more organic traffic.</p>
                <button
                    onClick={() => setActivePage('ai')}
                    className="text-lg font-semibold text-app-ai pl-9 hover:underline"
                >
                    Go to AI Growth Engine →
                </button>
            </div>
        </div>
    );
};

export default SeoView;
