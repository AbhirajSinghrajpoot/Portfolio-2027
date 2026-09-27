import React from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { FEATURED_PROJECTS } from '../../data/portfolioData'

export const AiFinanceChapter: React.FC = () => {
  const project = FEATURED_PROJECTS[0]

  const keyFeatures = [
    "Expense and transaction tracking",
    "Budget management and alerts",
    "AI-powered receipt scanning",
    "Automatic expense categorization",
    "Monthly financial analytics",
    "Secure user authentication",
    "Email-based notifications via Inngest",
    "API protection and rate limiting via Arcjet"
  ]

  return (
    <article id="project-ai-finance-platform" className="py-20 border-b border-white/[0.08] relative">
      <div className="flex items-center justify-between font-mono text-xs text-[#9da0a8] mb-8 pb-4 border-b border-white/[0.06] uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-[#e65c24]">PROJECT {project.number}</span>
          <span>// PERSONAL FINANCE &amp; AI AUTOMATION</span>
        </span>
        <span className="text-[#e65c24] font-semibold">{project.year}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-baseline">
        <div className="lg:col-span-8">
          <h3 className="font-display text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#f4f3ef] uppercase break-words">
            {project.title}
          </h3>
          <p className="font-mono text-sm sm:text-base text-[#e65c24] mt-2 tracking-wider uppercase">
            {project.subtitle}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f4f3ef] text-[#0c0d0e] px-5 py-2.5 font-mono text-xs font-semibold hover:bg-[#e65c24] hover:text-white transition-colors duration-200"
              data-cursor="LIVE"
            >
              <span>VIEW LIVE PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      <p className="font-sans text-lg sm:text-xl text-[#eceae5] max-w-3xl leading-relaxed mb-12 font-light">
        {project.summary}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-white/[0.08]">
        <div>
           <div className="font-mono text-xs text-[#e65c24] mb-6 uppercase">// KEY FEATURES</div>
           <ul className="space-y-4">
             {keyFeatures.map((feature, idx) => (
               <li key={idx} className="flex items-start gap-3 text-sm text-[#9da0a8]">
                 <CheckCircle2 className="w-4 h-4 text-[#e65c24] shrink-0 mt-0.5" />
                 <span>{feature}</span>
               </li>
             ))}
           </ul>
        </div>
        <div>
           <div className="font-mono text-xs text-[#e65c24] mb-6 uppercase">// TECHNOLOGIES</div>
           <div className="flex flex-wrap gap-2">
             {project.technologies.map(tech => (
               <span key={tech} className="px-3 py-1.5 bg-[#111215] border border-white/[0.06] rounded text-xs font-mono text-[#f4f3ef]">
                 {tech}
               </span>
             ))}
           </div>
        </div>
      </div>
    </article>
  )
}
