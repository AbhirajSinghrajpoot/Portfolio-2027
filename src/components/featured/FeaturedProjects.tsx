import React from 'react'
import { AiFinanceChapter } from './AiFinanceChapter'
import { NextHireChapter } from './NextHireChapter'
import { GetMeAChaiChapter } from './GetMeAChaiChapter'
import { IntelliThreatChapter } from './IntelliThreatChapter'
import { EditkaroChapter } from './EditkaroChapter'

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="featured-projects"
      className="py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Exhibition Master Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#e65c24] uppercase tracking-widest mb-3">
            <span>04 // SELECTED WORK</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4f3ef]">
            Featured Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-[#9da0a8] max-w-md leading-relaxed">
          Five projects spanning AI-powered finance, career intelligence, creator platforms, malware detection, and a video editing agency.
        </p>
      </div>

      {/* Project Chapters */}
      <div className="space-y-6">
        <div id="project-ai-finance-platform" className="featured-project-card scroll-mt-24">
          <AiFinanceChapter />
        </div>
        <div id="project-nexthire" className="featured-project-card scroll-mt-24">
          <NextHireChapter />
        </div>
        <div id="project-get-me-a-chai" className="featured-project-card scroll-mt-24">
          <GetMeAChaiChapter />
        </div>
        <div id="project-intellithreat" className="featured-project-card scroll-mt-24">
          <IntelliThreatChapter />
        </div>
        <div id="project-editkaro" className="featured-project-card scroll-mt-24">
          <EditkaroChapter />
        </div>
      </div>
    </section>
  )
}
