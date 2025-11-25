'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardView from '@/components/DashboardView';
import HealthView from '@/components/HealthView';
import TrafficView from '@/components/TrafficView';
import SeoView from '@/components/SeoView';
import AppView from '@/components/AppView';
import AiView from '@/components/AiView';
import Modal from '@/components/Modal';
import { clientData } from '@/data/clients';
import { ClientId, Issue, Alert, ClientData as ClientDataType } from '@/types';
import { generateBlogContent, generateStrategy, getSiteHealth } from '@/app/actions';

type PageId = 'dashboard' | 'health' | 'traffic' | 'seo' | 'app' | 'ai';

type ModalState =
  | { type: 'none' }
  | { type: 'health-list' }
  | { type: 'issue-fix'; issue: Issue }
  | { type: 'alert-fix'; alert: Alert }
  | { type: 'ai-blog'; content: string }
  | { type: 'ai-strategy'; content: string[] };

export default function Home() {
  const [activeClient, setActiveClient] = useState<ClientId>('landscaper');
  const [activePage, setActivePage] = useState<PageId>('dashboard');
  const [modalState, setModalState] = useState<ModalState>({ type: 'none' });

  // State for dynamic data (allows updates from API)
  const [currentData, setCurrentData] = useState<ClientDataType>(clientData['landscaper']);

  // Update currentData when activeClient changes
  useEffect(() => {
    setCurrentData(clientData[activeClient]);
  }, [activeClient]);

  // Update theme on body
  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-landscaper', 'theme-wedding', 'theme-cafe', 'theme-cafe-v2', 'theme-cafe-v3');
    // Add current theme class
    document.body.classList.add(currentData.theme);
  }, [currentData.theme]);

  const handleGenerateBlog = async () => {
    const prompt = `Write a SEO-optimized blog post for "${currentData.name}" targeting the keyword "${currentData.seo.keywords[0].term}".`;
    const content = await generateBlogContent(prompt);
    setModalState({ type: 'ai-blog', content });
  };

  const handleGenerateStrategy = async () => {
    const dataContext = `
      Site Health Score: ${currentData.health.score}
      Traffic: ${currentData.dashboard.traffic.users} users
      Top Keyword: ${currentData.seo.keywords[0].term}
      Business Type: ${currentData.name}
    `;
    const content = await generateStrategy(dataContext);
    setModalState({ type: 'ai-strategy', content });
  };

  const handleAnalyzeUrl = async (url: string) => {
    const result = await getSiteHealth(url);
    if (result) {
      setCurrentData(prev => ({
        ...prev,
        health: {
          ...prev.health,
          score: result.score,
          issues: result.issues
        },
        dashboard: {
          ...prev.dashboard,
          healthScore: result.score,
          healthIssues: result.issues.length
        }
      }));
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <DashboardView
            data={currentData}
            setActivePage={(page) => setActivePage(page as PageId)}
            openHealthModal={() => setModalState({ type: 'health-list' })}
          />
        );
      case 'health':
        return (
          <HealthView
            data={currentData}
            openIssueModal={(issue) => setModalState({ type: 'issue-fix', issue })}
            openHealthModal={() => setModalState({ type: 'health-list' })}
            onAnalyzeUrl={handleAnalyzeUrl}
          />
        );
      case 'traffic':
        return <TrafficView data={currentData} />;
      case 'seo':
        return <SeoView data={currentData} setActivePage={(page) => setActivePage(page as PageId)} />;
      case 'app':
        return <AppView data={currentData} openAlertModal={(alert) => setModalState({ type: 'alert-fix', alert })} />;
      case 'ai':
        return (
          <AiView
            data={currentData}
            onGenerateBlog={handleGenerateBlog}
            onGenerateStrategy={handleGenerateStrategy}
          />
        );
      default:
        return <div>Page not found</div>;
    }
  };

  const getPageTitle = () => {
    switch (activePage) {
      case 'dashboard': return 'Dashboard';
      case 'health': return 'Site Health';
      case 'traffic': return 'Traffic (Analytics)';
      case 'seo': return 'Local SEO (Keywords)';
      case 'app': return 'App Monitoring';
      case 'ai': return 'AI Growth Engine';
      default: return 'Dashboard';
    }
  };

  const renderModalContent = () => {
    if (modalState.type === 'none') return null;

    if (modalState.type === 'health-list') {
      return (
        <div className="space-y-6">
          {currentData.health.issues.map((issue) => (
            <div key={issue.id} className="border border-app-border p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-app-alert mb-2">{issue.title}</h4>
              <div className="text-app-text-sec space-y-2">
                {issue.fixSteps.map((step, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: step }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (modalState.type === 'issue-fix') {
      const { issue } = modalState;
      return (
        <div className="space-y-4">
          <div className="text-app-text-sec space-y-2">
            {issue.fixSteps.map((step, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </div>
        </div>
      );
    }

    if (modalState.type === 'alert-fix') {
      const { alert } = modalState;
      return (
        <div className="space-y-4">
          <div className="text-app-text-sec space-y-2">
            {alert.fixSteps.map((step, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: step }} />
            ))}
          </div>
        </div>
      );
    }

    if (modalState.type === 'ai-blog') {
      return (
        <div className="space-y-4">
          <div className="bg-app-bg p-4 rounded-lg border border-app-border max-h-[60vh] overflow-y-auto">
            <h4 className="text-xl font-bold text-app-text mb-2">{currentData.ai.blogTitle} (AI Generated)</h4>
            <div className="text-app-text-sec whitespace-pre-wrap prose prose-invert max-w-none">
              {modalState.content}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 text-app-text-sec hover:text-app-text" onClick={() => setModalState({ type: 'none' })}>Close</button>
            <button className="bg-app-ai text-app-text px-4 py-2 rounded-lg font-semibold">Copy to Clipboard</button>
          </div>
        </div>
      );
    }

    if (modalState.type === 'ai-strategy') {
      return (
        <div className="space-y-4">
          <div className="space-y-4">
            {modalState.content.map((step, idx) => (
              <div key={idx} className="bg-app-bg p-4 rounded-lg border border-app-border">
                <p className="text-app-text-sec" dangerouslySetInnerHTML={{ __html: step }} />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3">
            <button className="bg-app-ai text-app-text px-4 py-2 rounded-lg font-semibold" onClick={() => setModalState({ type: 'none' })}>Got it, thanks!</button>
          </div>
        </div>
      );
    }

    return null;
  };

  const getModalTitle = () => {
    switch (modalState.type) {
      case 'health-list': return 'Critical Site Health Issues';
      case 'issue-fix': return modalState.issue.fixTitle;
      case 'alert-fix': return modalState.alert.fixTitle;
      case 'ai-blog': return 'AI Blog Post Generated';
      case 'ai-strategy': return 'Your AI Growth Strategy';
      default: return '';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-app-bg text-app-text transition-colors duration-300">
      <Sidebar activePage={activePage} setActivePage={(page) => setActivePage(page as PageId)} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={getPageTitle()}
          activeClient={activeClient}
          setActiveClient={setActiveClient}
        />

        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {renderContent()}
        </div>
      </main>

      <Modal
        isOpen={modalState.type !== 'none'}
        onClose={() => setModalState({ type: 'none' })}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
