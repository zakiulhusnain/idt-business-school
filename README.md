# IDT Pakistan - Next.js 14 Website

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
src/
└── app/
    ├── layout.tsx          ← Root layout (HTML, fonts, metadata)
    ├── globals.css         ← Global styles + Tailwind
    ├── page.tsx            ← HOME PAGE (/)
    │
    ├── components/         ← Reusable components (used across pages)
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── AboutSection.tsx
    │   ├── CoursesSection.tsx
    │   ├── SkillSection.tsx
    │   ├── SandboxSection.tsx
    │   ├── BusinessSection.tsx
    │   ├── FAQSection.tsx
    │   └── TestimonialsSection.tsx
    │
    ├── about/
    │   └── page.tsx        ← About page (/about)
    │
    ├── courses/
    │   ├── page.tsx        ← All Courses page (/courses)
    │   └── [slug]/
    │       └── page.tsx    ← Individual course page (/courses/web-development etc)
    │
    ├── mentors/
    │   └── page.tsx        ← Mentors page (/mentors)
    │
    ├── contact/
    │   └── page.tsx        ← Contact page (/contact)
    │
    ├── career/
    │   └── page.tsx        ← Career/Job Placement page (/career)
    │
    ├── blog/
    │   ├── page.tsx        ← Blog listing page (/blog)
    │   └── [slug]/
    │       └── page.tsx    ← Individual blog post (/blog/some-post)
    │
    └── verify/
        └── page.tsx        ← Certificate verification page (/verify)
```

---

## 📸 Images

All images are currently loaded from the live Vercel URL:
`https://idt-olive.vercel.app/filename.jpg`

**To use your own images:**
1. Add your image files to the `/public` folder
2. Change the `src` in Image components from:
   ```
   src="https://idt-olive.vercel.app/Main Hero.jpg"
   ```
   to:
   ```
   src="/Main Hero.jpg"
   ```

---

## 🆕 How to Add a New Page

For example, to add the **About** page:

1. Create folder: `src/app/about/`
2. Create file: `src/app/about/page.tsx`
3. Write the page:

```tsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      {/* Your sections here */}
      <Footer />
    </main>
  )
}
```

That's it! Next.js automatically creates the `/about` route.

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

---

## 🌐 Deployment (Vercel)

```bash
# Push to GitHub, then connect repo to vercel.com
# OR use Vercel CLI:
npm i -g vercel
vercel
```
