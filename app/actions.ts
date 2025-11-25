'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { Issue } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export async function generateBlogContent(prompt: string): Promise<string> {
    if (!process.env.GEMINI_API_KEY) {
        return "Error: GEMINI_API_KEY is not set in environment variables.";
    }

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating blog content:', error);
        return "Error: Failed to generate content. Please try again later.";
    }
}

export async function generateStrategy(dataContext: string): Promise<string[]> {
    if (!process.env.GEMINI_API_KEY) {
        return ["Error: GEMINI_API_KEY is not set."];
    }

    const prompt = `
    Act as a digital business strategist. Based on the following data, provide 3 specific, actionable, plain-English steps to improve business growth.
    Format the response as a simple JSON array of strings, e.g. ["Step 1...", "Step 2...", "Step 3..."].
    Do not include markdown formatting or code blocks in the response, just the raw JSON array.
    
    Data:
    ${dataContext}
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up potential markdown code blocks
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        return JSON.parse(cleanText);
    } catch (error) {
        console.error('Error generating strategy:', error);
        return ["Error: Failed to generate strategy."];
    }
}

export async function getSiteHealth(url: string): Promise<{ score: number; issues: Issue[] } | null> {
    if (!process.env.PAGESPEED_API_KEY) {
        console.error('PAGESPEED_API_KEY is not set');
        return null;
    }

    try {
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${process.env.PAGESPEED_API_KEY}&category=PERFORMANCE&strategy=MOBILE`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            console.error('PageSpeed API Error:', data.error);
            return null;
        }

        const score = Math.round(data.lighthouseResult.categories.performance.score * 100);
        const audits = data.lighthouseResult.audits;
        const issues: Issue[] = [];

        // Helper to map audits to our Issue format
        const addIssue = (auditId: string, severity: Issue['severity'], fixTitle: string) => {
            const audit = audits[auditId];
            if (audit && audit.score !== 1 && audit.score !== null) {
                issues.push({
                    id: auditId,
                    title: audit.title,
                    severity: severity,
                    fixTitle: fixTitle,
                    fixSteps: [
                        audit.description,
                        `<strong>Action:</strong> Address the items listed in the PageSpeed Insights report for ${audit.title}.`
                    ]
                });
            }
        };

        addIssue('uses-optimized-images', 'Critical', 'Fix: Optimize Images');
        addIssue('unused-javascript', 'High', 'Fix: Remove Unused JavaScript');
        addIssue('render-blocking-resources', 'High', 'Fix: Eliminate Render-Blocking Resources');
        addIssue('server-response-time', 'Medium', 'Fix: Reduce Server Response Time');

        return { score, issues };

    } catch (error) {
        console.error('Error fetching PageSpeed data:', error);
        return null;
    }
}
