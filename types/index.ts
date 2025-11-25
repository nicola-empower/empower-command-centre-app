export interface Issue {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low' | 'CRITICAL SECURITY RISK' | 'HIGH PRIORITY' | 'ACTION REQUIRED';
  fixTitle: string;
  fixSteps: string[];
}

export interface Keyword {
  term: string;
  pos: number;
  change: number;
}

export interface Alert {
  id: string;
  title: string;
  severity: string;
  fixTitle: string;
  fixSteps: string[];
}

export interface ClientData {
  theme: string;
  name: string;
  dashboard: {
    healthScore: number;
    healthIssues: number;
    traffic: {
      users: number;
      change: number;
      chart: number[];
    };
    devices: number[]; // [Mobile, Desktop]
    sources: { name: string; value: string }[];
  };
  health: {
    score: number;
    issues: Issue[];
  };
  traffic: {
    insight: string;
  };
  seo: {
    keywords: Keyword[];
    aiPrompt: string;
  };
  app: {
    alerts: Alert[];
  };
  ai: {
    blogTitle: string;
    blogPost: string;
    strategy: string[];
  };
}

export type ClientId = 'landscaper' | 'wedding' | 'cafe';

export const CLIENT_IDS: ClientId[] = ['landscaper', 'wedding', 'cafe'];
