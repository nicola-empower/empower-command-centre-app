# Empower Command Centre

A modern, white-label business dashboard built for digital agencies to provide their clients with real-time insights, site health monitoring, and AI-driven growth strategies.

<img width="2861" height="1512" alt="image" src="https://github.com/user-attachments/assets/56bee4dd-a89f-44d9-96bb-097b5893cf1c" />


##  Features

*   **Multi-Client Support**: Seamlessly switch between different client views (e.g., Landscaper, Wedding Planner, Cafe) with instant theme and data adaptation.
*   **Dynamic Theming**: Custom CSS variable-based theming engine that completely transforms the look and feel for each client brand.
*   **Real-Time Analytics**: Interactive charts for traffic, device usage, and sources using `chart.js`.
*   **Site Health Monitoring**: Integrated with **Google PageSpeed Insights API** to provide real-time performance scores and actionable fix guides.
*   **AI Growth Engine**: Powered by **Google Gemini 2.5 Flash**, offering:
    *   **Blog Post Generator**: Creates SEO-optimized content based on top-performing keywords.
    *   **Strategy Advisor**: Analyses site metrics to generate bespoke business growth strategies.
*   **Glassmorphism UI**: A premium, modern interface design with frosted glass effects and responsive layouts.

##  Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **AI**: [Google Gemini API](https://ai.google.dev/)
*   **Performance**: [Google PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
*   **Charts**: [Chart.js](https://www.chartjs.org/) & [React Chartjs 2](https://react-chartjs-2.js.org/)
*   **Icons**: [Lucide React](https://lucide.dev/)

##  Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nicola-empower/empower-command-centre.git
    cd empower-command-centre
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your API keys:
    ```env
    GEMINI_API_KEY=your_gemini_api_key
    PAGESPEED_API_KEY=your_pagespeed_api_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

##  Themes

The application currently features three distinct themes to demonstrate versatility:

*   **GreenLeaf Landscaping**: Professional, nature-inspired green palette.
*   **Thistle & Rose Events**: Elegant, high-end purple and pink palette.
*   **The Corner Drip Café**: Modern, high-contrast Teal and Sage palette.

##  License

This project is licensed under the MIT License.

**Nicola Berry | Empower Digital Solutions**
