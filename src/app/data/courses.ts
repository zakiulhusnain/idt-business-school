export type Course = {
  slug: string
  title: string
  shortDesc: string
  image: string
  price?: string
}
export const courses: Course[] = [
  {
    slug: 'software-quality-assurance',
    title: 'Software Quality Assurance',
    shortDesc: 'Want to build a career in Software Testing? Learn manual & automation testing, bug tracking, and QA tools like Selenium, JIRA, and Postman.',
    image: '/qa.webp',
  },
  {
    slug: 'application-development',
    title: 'Application Development',
    shortDesc: 'Want to build your own mobile apps or start a tech career? Master Android and cross-platform app creation with Flutter, Firebase, and Android Studio.',
    image: '/appdev.webp',
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    shortDesc: 'Learn how to use advanced AI tools, automate workflows, build smart AI systems, and develop intelligent solutions using ChatGPT, Gemini, and Claude.',
    image: '/new.webp',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'Learn how to create high-converting campaigns, manage social media, rank on Google, run paid ads, and generate leads using Facebook Ads, Google Ads, and SEO tools.',
    image: '/digitalmarket.webp',
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    shortDesc: 'Master high-quality video creation for YouTube, social media, and freelancing using Adobe Premiere Pro, CapCut, and Filmora.',
    image: '/videoediting.webp',
  },
  {
    slug: 'wordpress-development',
    title: 'Wordpress Development',
    shortDesc: 'Learn to build professional, fast, and mobile-friendly websites using WordPress — theme customization, plugin setup, eCommerce and SEO optimization.',
    image: '/wordpress.webp',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDesc: 'Become a professional web developer and build fast, responsive websites using HTML, CSS, JavaScript, Bootstrap, and React from scratch.',
    image: '/webdeve.webp',
  },
  {
    slug: 'seo-mastery',
    title: 'SEO Mastery',
    shortDesc: 'Boost website traffic and improve online visibility. Master SEO, keyword research, link building, and tools like Google Search Console, SEMrush, and Yoast.',
    image: '/seo.webp',
  },
  {
    slug: 'data-analytics-beginners',
    title: 'Data Analytics Beginners',
    shortDesc: 'Learn data analysis, create dashboards, and generate insights using Python, SQL, Excel, and Power BI to make data-driven decisions.',
    image: '/dataanalytics.webp',
  },
  {
    slug: 'graphic-designing',
    title: 'Graphic Designing',
    shortDesc: 'Master visual communication using Adobe Photoshop, Illustrator, and Canva. Create logos, brand designs, social media posts, and build a freelance portfolio.',
    image: '/graphic.webp',
  },

  {
    slug: 'truck-dispatching',
    title: 'Truck Dispatching',
    shortDesc: 'Master U.S. trucking dispatch operations, load booking, route planning, and carrier–broker communications to work as an independent or company dispatcher.',
    image: '/truck.webp',
  },
  {
    slug: 'meta-master',
    title: 'Meta Master',
    shortDesc: 'Master Facebook and Instagram marketing — ads, pixel setup, audience targeting, content strategy, and Meta Business Suite for real-world campaign results.',
    image: '/meta.webp',
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    shortDesc: 'Become a professional Data Analyst using Excel, Power BI, SQL, and Python. Learn dashboards, reporting automation, and real-world case studies.',
    image: '/dataanalytics.webp',

  },
]