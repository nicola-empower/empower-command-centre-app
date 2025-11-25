import { ClientData, ClientId } from '@/types';

export const clientData: Record<ClientId, ClientData> = {
    'landscaper': {
        theme: 'theme-landscaper',
        name: 'GreenLeaf Landscaping',
        dashboard: {
            healthScore: 82,
            healthIssues: 2,
            traffic: {
                users: 480,
                change: 12,
                chart: [120, 150, 110, 160, 190, 180, 200]
            },
            devices: [68, 32], // [Mobile, Desktop]
            sources: [
                { name: 'Google (Organic)', value: '62%' },
                { name: 'Direct', value: '22%' },
                { name: 'Facebook', value: '16%' }
            ]
        },
        health: {
            score: 82,
            issues: [
                {
                    id: 'health-1',
                    title: 'Images are not in next-gen formats',
                    severity: 'Critical',
                    fixTitle: 'Fix 1: Convert Images to WebP',
                    fixSteps: [
                        "Your JPG/PNG images are large and slow to load, especially on mobile.",
                        "<strong>The Fix:</strong> This is a simple but powerful fix. 'Next-gen' formats like <strong>WebP</strong> are smaller and faster.",
                        "<strong>Action:</strong>",
                        "1. Download a free tool like <a href='https://squoosh.app/' target='_blank' class='text-accent underline'>Squoosh</a>.",
                        "2. Drag your large homepage images into the tool.",
                        "3. Select 'WebP' from the compression options on the right and save the new file.",
                        "4. Re-upload these new, smaller WebP images to your website. This alone can improve your load speed by 30-50%."
                    ]
                },
                {
                    id: 'health-2',
                    title: 'Reduce unused JavaScript',
                    severity: 'High',
                    fixTitle: 'Fix 2: Defer Unused JavaScript',
                    fixSteps: [
                        "Your site is loading JavaScript (like sliders, pop-ups, or plugins) that isn't needed immediately.",
                        "<strong>The Fix:</strong> Tell your site to 'lazy load' these scripts, so they don't slow down the initial page load.",
                        "<strong>Action:</strong>",
                        "1. If you use WordPress, install a free caching plugin like 'WP Rocket' or 'LiteSpeed Cache'.",
                        "2. Go to the plugin's settings and find the 'File Optimization' tab.",
                        "3. Check the boxes for <strong>'Load JavaScript deferred'</strong> and/or </strong>'Delay JavaScript execution'</strong>.",
                        "4. This will stop non-essential scripts from loading until a user scrolls, making your site feel much faster."
                    ]
                }
            ]
        },
        traffic: {
            insight: "Your traffic is <strong>68% mobile</strong>, but your 'Site Health' report shows critical image issues that slow down mobile loading. <strong>Action:</strong> Fix the image formats to improve the mobile experience and reduce your bounce rate."
        },
        seo: {
            keywords: [
                { term: 'Landscaper in Falkirk', pos: 3, change: 2 },
                { term: 'Garden design Stirling', pos: 7, change: 0 },
                { term: 'Patio installers near me', pos: 12, change: -1 }
            ],
            aiPrompt: 'Act as an SEO expert for "GreenLeaf Landscaping". Write a 300-word, keyword-rich blog post targeting "Best Landscaper in Falkirk" to attract local clients.'
        },
        app: {
            alerts: [
                {
                    id: 'app-1',
                    title: 'RLS Bug in Customer Portal',
                    severity: 'CRITICAL SECURITY RISK',
                    fixTitle: 'FIX: Secure Your No-Code App (RLS Bug)',
                    fixSteps: [
                        "Your app's database (e.g., in Bubble, Supabase, or Replit) has a 'Row Level Security' (RLS) bug.",
                        "<strong>The Problem:</strong> This means any logged-in user can potentially see <strong>other users'</stong> data (like invoices or messages) just by guessing the URL. This is a massive privacy breach.",
                        "<strong>Action (The Non-Developer Fix):</strong>",
                        "1. Go to your app's <strong>Database</strong> or <strong>Data</strong> tab.",
                        "2. Find the 'Data Privacy' or 'Policies' section.",
                        "3. Find the data type (e.g., 'Invoices' or 'Projects').",
                        "4. Create a <strong>New Privacy Rule</strong>.",
                        "5. Set the condition: `When Current User's [field] is this [data's field]` (e.g., `When Current User's 'Company' is this 'Invoice's' 'Company'`).",
                        "6. Check all boxes <strong>EXCEPT</strong> 'Find this in searches' and 'View all fields'.",
                        "7. This ensures users can *only* see data they created. <strong>This is the most important fix you can do.</strong>"
                    ]
                }
            ]
        },
        ai: {
            blogTitle: "Finding the Best Landscaper in Falkirk: 3 Things to Look For",
            blogPost: "Finding the right landscaper in Falkirk can transform your garden... (This 300-word, SEO-rich blog post would be generated by the AI, targeting local homeowners and establishing GreenLeaf as a local authority.) *Dev Note: AI has not been added to this demo*",
            strategy: [
                "<strong>1. Fix Your Mobile Speed (Priority #1):</strong> Your analytics show 68% of users are on mobile, but your 'Site Health' report shows critical speed issues. This is why users are leaving. Fix the 'Image Formats' issue *this week*.",
                "<strong>2. Target 'Garden Design Stirling' Keyword:</strong> Your blog post generator can create an article for 'Top 5 Garden Design Trends in Stirling'. This will help you rank for your #2 keyword.",
                "<strong>3. Create a 'Patio Portfolio' Page:</strong> You are ranking poorly for 'patio installers'. Create a new page on your site dedicated *only* to patios. Use the AI to write 3-4 project descriptions for it."
            ]
        }
    },
    'wedding': {
        theme: 'theme-wedding',
        name: 'Thistle & Rose Events',
        dashboard: {
            healthScore: 65,
            healthIssues: 1,
            traffic: {
                users: 1200,
                change: 8,
                chart: [300, 250, 310, 360, 400, 380, 410]
            },
            devices: [85, 15], // [Mobile, Desktop]
            sources: [
                { name: 'Pinterest', value: '45%' },
                { name: 'Instagram', value: '30%' },
                { name: 'Google (Organic)', value: '25%' }
            ]
        },
        health: {
            score: 65,
            issues: [
                {
                    id: 'health-1',
                    title: 'Hero Image is 4.5MB',
                    severity: 'Critical',
                    fixTitle: 'Fix: Compress Your Hero Image',
                    fixSteps: [
                        "Your main homepage image is 4.5MB. This is *massive* and makes your site feel broken, especially for mobile users on Pinterest.",
                        "<strong>The Fix:</strong> You must compress this image without losing visual quality.",
                        "<strong>Action:</strong>",
                        "1. Go to <a href='https://tinyjpg.com/' target='_blank' class='text-accent underline'>TinyJPG.com</a> (it also works for PNGs).",
                        "2. Upload your 4.5MB hero image. It will compress it by 70-80%.",
                        "3. Download the new, smaller file (it will likely be under 500KB).",
                        "4. Re-upload this new image to your website's homepage. This is the single biggest win you can get for your site speed."
                    ]
                }
            ]
        },
        traffic: {
            insight: "Your traffic is <strong>85% mobile</strong> and comes from visual platforms (Pinterest, Instagram). Your 'Site Health' report shows a critical 4.5MB image. <strong>Action:</strong> Fix this image immediately to stop losing valuable leads from social media."
        },
        seo: {
            keywords: [
                { term: 'Luxury wedding planner Scotland', pos: 5, change: 1 },
                { term: 'Thistle & Rose Events reviews', pos: 1, change: 0 },
                { term: 'Barn wedding venues Scotland', pos: 9, change: -2 }
            ],
            aiPrompt: 'Act as a luxury wedding planner. Write a 300-word, inspiring blog post about "Top 5 Barn Wedding Venues in Scotland" to attract high-end brides.'
        },
        app: {
            alerts: [
                {
                    id: 'app-1',
                    title: 'Booking Widget Failing on Safari',
                    severity: 'HIGH PRIORITY',
                    fixTitle: 'FIX: Booking Widget CSS Bug',
                    fixSteps: [
                        "Your embedded booking widget (e.g., Calendly, Acuity) is not displaying correctly on iPhones or Safari browsers.",
                        "<strong>The Problem:<strong> This is a common CSS 'z-index' bug, where another element (like your nav bar) is invisibly floating *over* the widget, making it unclickable.",
                        "<strong>Action (The Non-Developer Fix):</strong>",
                        "1. Go to your website editor (e.g., Squarespace, Showit).",
                        "2. Find the 'Custom CSS' panel.",
                        "3. Copy and paste this code at the very bottom:",
                        "   `.your-widget-class-name { z-index: 9999 !important; }`",
                        "4. (You may need to use your browser's 'Inspect' tool to find the widget's class name, or just email your web designer to do it). This tells the browser to *always* put your widget on top."
                    ]
                }
            ]
        },
        ai: {
            blogTitle: "5 Breathtaking Barn Venues for Your Dream Scottish Wedding",
            blogPost: "Planning a rustic-yet-elegant wedding in Scotland? Barn venues offer a magical blend of countryside charm... (This 300-word, inspiring blog post would be generated by the AI, targeting your ideal client.) *Dev Note: AI has not been added to this demo*",
            strategy: [
                "<strong>1. Fix Your Hero Image (NOW):</strong> 85% of your clients come from Pinterest/Instagram on mobile. They will *not* wait for a 4.5MB image to load. Use TinyJPG.com to fix this today. This is losing you money.",
                "<strong>2. Double Down on Pinterest:</strong> Create 5-10 new pins linking to your 'Barn Wedding Venues' blog post (which the AI can write). This is your #1 traffic source.",
                "<strong>3. Fix Your Booking Widget:</strong> The Safari bug on your app page is stopping clients from booking. This is a critical failure. Send the code from your 'App Monitoring' fix to your developer."
            ]
        }
    },
    'cafe': {
        theme: 'theme-cafe-v3',
        name: 'The Corner Drip Café',
        dashboard: {
            healthScore: 92,
            healthIssues: 1,
            traffic: {
                users: 2100,
                change: 5,
                chart: [600, 550, 610, 660, 700, 680, 710]
            },
            devices: [78, 22], // [Mobile, Desktop]
            sources: [
                { name: 'Google Maps', value: '55%' },
                { name: 'Google (Organic)', value: '30%' },
                { name: 'Instagram', value: '15%' }
            ]
        },
        health: {
            score: 92,
            issues: [
                {
                    id: 'health-1',
                    title: 'No "alt text" on menu images',
                    severity: 'Medium',
                    fixTitle: 'Fix: Add "Alt Text" for SEO & Accessibility',
                    fixSteps: [
                        "Your menu page has images of your food, but no 'alt text'.",
                        "<strong>The Problem</strong> 'Alt text' is the text description Google reads to understand what an image is. It's also what screen readers use for visually impaired visitors. Without it, you're hurting your local SEO and accessibility.",
                        "<strong>Action (The Non-Developer Fix):</strong>",
                        "1. Go to your website's media library or page editor.",
                        "2. Click on each menu image (e.g., `croissant.jpg`).",
                        "3. Find the field labelled <strong>'Alt Text'</strong> or 'Alternative Text'.",
                        "4. Write a simple, descriptive sentence. <strong>Good:</strong> 'A freshly baked croissant on a plate.' <strong>Bad:</strong> 'img_1234.jpg'",
                        "5. This helps Google rank your images in searches like 'best croissant near me'."
                    ]
                }
            ]
        },
        traffic: {
            insight: "Your traffic is <strong>55% from Google Maps</strong>, and 78% is on mobile. This means people are finding you *while walking around*. <strong>Action:</strong> Your priority is to win the click from Google Maps. Use the AI to generate responses to all your Google Reviews."
        },
        seo: {
            keywords: [
                { term: 'Best coffee near me', pos: 2, change: 0 },
                { term: 'Café in Falkirk town centre', pos: 4, change: 1 },
                { term: 'Dog friendly café Falkirk', pos: 6, change: -1 }
            ],
            aiPrompt: 'Act as the friendly owner of "The Corner Drip Café". Write a 100-word, keyword-rich response to a 5-star Google Review that mentions your "dog friendly" policy.'
        },
        app: {
            alerts: [
                {
                    id: 'app-1',
                    title: 'Google Reviews Need Responses',
                    severity: 'ACTION REQUIRED',
                    fixTitle: 'FIX: Respond to Google Reviews',
                    fixSteps: [
                        "Your app has detected 4 new Google Reviews that have not been answered.",
                        "<strong>The Problem:</strong> Responding to reviews (both good and bad) is the #1 factor for improving your Google Maps ranking. It shows Google and new customers that you are active and engaged.",
                        "<strong>Action (The Non-Developer Fix):</strong>",
                        "1. Go to your <strong>'AI Growth Engine'</strong> page.",
                        "2. Use the 'AI Google Review Responder' tool.",
                        "3. It will generate friendly, professional responses for you.",
                        "4. Copy and paste these responses directly into your 'Google Business Profile'. Aim to do this once per week."
                    ]
                }
            ]
        },
        ai: {
            blogTitle: "AI Google Review Responder",
            blogPost: "Hi [Customer Name]! Thanks so much for the lovely 5-star review. We're so glad you enjoyed our coffee... (This 100-word, keyword-rich response would be generated by the AI for you to copy-paste directly into your Google Business Profile.) *Dev Note: AI has not been added to this demo*",
            strategy: [
                "<strong>1. Double Down on Google Maps (Priority #1):</strong> Over half your customers find you on Google Maps. Your #1 marketing job is to *own* that platform. Use the AI to respond to *all* new Google Reviews this week.",
                "<strong>2. Fix Image Alt Text:</strong> This is an easy SEO win. Follow the 'Site Health' guide to add alt text to your menu images. This will help you rank for 'best croissant in Falkirk', etc.",
                "<strong>3. Target 'Dog Friendly':</strong> You are ranking #6 for 'dog friendly café'. Use the AI to write a blog post titled 'Our Top 5 Favourite Pups of the Month' and post it on Instagram and your site."
            ]
        }
    }
};
