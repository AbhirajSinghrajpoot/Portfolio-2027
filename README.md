# Abhiraj Singh Rajpoot — Portfolio 2026

> Personal developer portfolio built with React, TypeScript, and Vite.  
> Full-Stack Developer · AI / Generative AI · Cybersecurity

---

## Live

🌐 **Portfolio:** *(Deploy URL here)*  
📧 **Email:** abhirajsingh2k5@gmail.com  
🐙 **GitHub:** https://github.com/AbhirajSinghrajpoot  
💼 **LinkedIn:** https://linkedin.com/in/abhiraj-singh-rajpoot-7133a9349  
🧩 **LeetCode:** https://leetcode.com/u/abhirajsinghrajpoot

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger, Lenis Smooth Scroll |
| Typing Effect | Typed.js |
| Icons | Lucide React |
| Contact Form | Google Apps Script (Sheets backend) |

---

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx               # Name, portrait, intro statement
│   ├── AboutStatement.tsx     # Philosophy & bio
│   ├── SkillsMatrix.tsx       # Skill categories
│   ├── featured/
│   │   └── FeaturedProjects.tsx  # 4 featured projects
│   ├── ProjectArchive.tsx     # 12+ archived projects
│   ├── EducationCertifications.tsx
│   ├── EvolutionTimeline.tsx  # Experience & internships
│   ├── TerminalFootprint.tsx  # GitHub & LeetCode stats
│   ├── ContactSection.tsx     # Contact form + FAQs
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── IntroLoader.tsx        # 3D intro cover
│   └── CustomCursor.tsx
├── data/
│   └── portfolioData.ts       # All content: projects, skills, certs
├── hooks/
│   └── useSmoothScroll.ts
├── App.tsx
└── main.tsx
public/
├── images/
│   ├── abhiraj1.png           # Hero portrait
│   └── abhiraj2.png
└── favicon.svg
```

---

## Featured Projects

| # | Project | Stack | Link |
|---|---|---|---|
| 01 | AI Finance Platform | Next.js, Supabase, Prisma, Clerk, Gemini AI | [Live](https://ai-finance-amber.vercel.app/) |
| 02 | NextHire | React, TypeScript, Tailwind, AI APIs | [Live](https://nexthire-mu.vercel.app/) |
| 03 | Get Me A Chai | Next.js, MongoDB, Razorpay | [Live](https://get-me-a-chai-wizard.vercel.app/) |
| 04 | CyberRakshak | React, TypeScript, Vite, Google Gemini API | — |

---

## Personal Info

- **Name:** Abhiraj Singh Rajpoot
- **Location:** Jabalpur, Madhya Pradesh, India
- **University:** Baderia Global Institute of Engineering & Management · RGPV
- **Degree:** B.Tech — IoT, Cybersecurity & Blockchain (2027)
- **CGPA:** 7.18 / 10

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Contact Form

Form submissions go to a Google Apps Script endpoint and are stored in a Google Sheet.  
Script URL is configured in `src/components/ContactSection.tsx`.

---

© 2026 Abhiraj Singh Rajpoot
