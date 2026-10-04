// ============================================================
// Edit everything about yourself in this one file.
// ============================================================

export const profile = {
  name: 'Zainul Abideen Maricar',
  title: 'Digital Marketing Executive | SEO Specialist',
  heroHeading: 'Digital Marketing Executive & SEO Specialist',
  heroText:
    'I help businesses improve their online visibility, search rankings, organic traffic, and digital presence through effective SEO strategies.',
  experienceLabel: '1+ Year SEO Experience',
  company: 'Fourth Dimension Media Solution',
  // Put your photo in /public (e.g. /public/profile.jpg) and set image: '/profile.jpg'
  image: '',
  imageAlt: 'Portrait of Zainul Abideen Maricar',
  about: [
    'I am a Digital Marketing and SEO professional with 1+ year of practical experience improving how websites perform in search.',
    'My day-to-day covers keyword research, on-page and technical optimization, off-page activity, website audits and reviewing search performance in Google Search Console and Google Analytics.',
  ],
};

export const contact = {
  email: 'zainulzainul7108@gmail.com',
  phone: '+91 7339198207',
  linkedin: 'https://www.linkedin.com/in/zainul-abideen-maricar/',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '1+', label: 'Years experience' },
  { value: 'SEO', label: 'Focused' },
  { value: 'Multi', label: 'SEO activities' },
  { value: 'Data', label: 'Driven approach' },
];

export const aboutTags = [
  'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Keyword Research', 'Content Optimization',
  'Google Search Console', 'Google Analytics', 'Google Keyword Planner', 'Website Audits',
  'Backlink Building', 'Web Stories', 'SEO Performance Analysis',
];

export const skills = [
  {
    group: 'SEO',
    items: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Keyword Research', 'Competitor Analysis', 'Website Audit', 'Link Building', 'Content Optimization', 'Video Editing'],
  },
  {
    group: 'Analytics & Tools',
    items: ['Google Analytics', 'Google Search Console', 'Google Keyword Planner', 'SEO Audit Tools', 'Search Performance Analysis', 'Aherf', 'Canva'],
  },
];

export const experience = [
  {
    role: 'Digital Marketing Executive / SEO Executive',
    company: 'Fourth Dimension Media Solution',
    period: '1+ Year',
    points: [
      'Conducting keyword research',
      'Performing on-page SEO optimization',
      'Working on off-page SEO activities',
      'Performing technical SEO checks',
      'Monitoring website performance',
      'Using Google Search Console',
      'Using Google Analytics',
      'Conducting website audits',
      'Working on backlink activities',
      'Supporting blog/content optimization',
      'Monitoring clicks, impressions, CTR, and average position',
      'Working on Web Stories',
    ],
  },
];

// icon names map to lucide icons in Services.jsx
export const services = [
  { icon: 'Search', title: 'SEO Optimization', text: 'Improving how your site is found, crawled and understood by search engines.' },
  { icon: 'KeyRound', title: 'Keyword Research', text: 'Finding the search terms your audience uses and mapping them to pages.' },
  { icon: 'FileText', title: 'On-Page SEO', text: 'Titles, meta tags, headings, internal links and page structure.' },
  { icon: 'Wrench', title: 'Technical SEO', text: 'Checks for crawlability, indexing, site structure and page health.' },
  { icon: 'Link2', title: 'Off-Page SEO', text: "Backlink activity and off-site work that supports a site's visibility." },
  { icon: 'ClipboardCheck', title: 'Website SEO Audit', text: 'A structured review of issues and opportunities, with clear next steps.' },
  { icon: 'PenLine', title: 'Content Optimization', text: 'Refining blogs and pages so they match search intent.' },
  { icon: 'LineChart', title: 'SEO Performance Analysis', text: 'Tracking clicks, impressions, CTR and position to guide the next move.' },
];

// PLACEHOLDERS: replace with your real work. No client names or results are included on purpose.
export const projects = [
  {
    category: 'SEO Optimization',
    title: 'Levista Coffee',
    text: 'Worked on SEO optimization to improve organic visibility and keyword rankings for coffee-related searches. Implemented on-page SEO, content improvements, and technical recommendations to enhance search performance.',
    tags: ['SEO', 'On-Page', 'Technical SEO'],
    link: ''
  },
  {
    category: 'SEO Optimization',
    title: 'Taabi Mobility',
    text: 'Managed SEO activities to increase online presence and drive targeted traffic for mobility solutions. Conducted keyword research, optimized landing pages, and monitored performance through Google Search Console.',
    tags: ['SEO', 'Keyword Research', 'GSC'],
    link: ''
  },
  {
    category: 'Education SEO',
    title: 'Online SRM',
    text: 'Supported SEO initiatives for educational programs to improve search rankings and student inquiries. Optimized website content, metadata, and internal linking to enhance visibility for relevant course keywords.',
    tags: ['Education', 'SEO', 'Content'],
    link: ''
  },
  {
    category: 'Education SEO',
    title: 'SRM School of Banking',
    text: 'Executed SEO strategies focused on banking and finance education-related search terms. Performed on-page optimization, content enhancement, and technical audits to improve organic reach.',
    tags: ['SEO', 'On-Page', 'Technical'],
    link: ''
  },
  {
    category: 'Industrial SEO',
    title: 'Arun TMT',
    text: 'Worked on SEO for a leading TMT steel brand to strengthen online visibility and brand awareness. Optimized product pages, targeted industry-specific keywords, and improved website structure for better indexing.',
    tags: ['SEO', 'Technical SEO', 'Content'],
    link: ''
  },
  {
    category: 'Pet Care SEO',
    title: 'Waggndine',
    text: 'Handled SEO activities for a pet care and lifestyle platform to increase organic traffic. Conducted keyword analysis, content optimization, and performance tracking to improve search engine rankings.',
    tags: ['SEO', 'Keyword Research', 'Analytics'],
    link: ''
  }
];

// DEMO DATA ONLY. These numbers are not real and are labelled as sample data in the UI.
export const dashboard = {
  metrics: [
    { label: 'Organic Traffic', value: 12400, suffix: '', decimals: 0 },
    { label: 'Clicks', value: 4200, suffix: '', decimals: 0 },
    { label: 'Impressions', value: 86000, suffix: '', decimals: 0 },
    { label: 'CTR', value: 4.9, suffix: '%', decimals: 1 },
    { label: 'Avg. Position', value: 12.4, suffix: '', decimals: 1 },
    { label: 'Keywords', value: 320, suffix: '', decimals: 0 },
  ],
  trend: [30, 34, 33, 41, 46, 44, 52, 58, 57, 66, 72, 80],
  months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
};
