"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/features/projects//types";

/* ─── Placeholder khi chưa có heroImage ─────────────────── */
function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center"
      style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(3,1,48,1) 19%, rgba(12,12,128,1) 48%, rgba(4,5,34,1) 100%)" }}>
      <svg viewBox="0 0 64 64" width="52" height="52" fill="none"
        stroke="rgba(255,255,255,0.3)" strokeWidth={1.2}>
        <rect x="8" y="10" width="48" height="34" rx="3" />
        <path d="M20 44v8M44 44v8M14 52h36" />
        <rect x="14" y="16" width="14" height="10" rx="1" />
        <path d="M32 16h16M32 21h12M32 26h16" />
        <path d="M14 34h36" />
      </svg>
    </div>
  );
}

/* ─── ProjectCard ────────────────────────────────────────── */
export function ProjectCard({ project }: { project: Project }) {
  const metrics = [
    project.metrics.bpmn && { val: project.metrics.bpmn, lbl: "BPMN" },
    project.metrics.screens && { val: project.metrics.screens, lbl: "Screens" },
    project.metrics.testCases && { val: project.metrics.testCases, lbl: "Tests" },
    project.metrics.actors && { val: project.metrics.actors, lbl: "Actors" },
  ].filter(Boolean).slice(0, 2) as { val: number; lbl: string }[];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
 <a href={`/projects/${project.slug}`} className="group block h-full">
        <article
          className="flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-[#A2A2A2] hover:border-[#d74b16]/40"
          style={{
            boxShadow: "0 2px 8px rgba(40,97,129,0.05)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.boxShadow =
              "0 20px 48px rgba(40,97,129,0.13)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.boxShadow =
              "0 2px 8px rgba(40,97,129,0.05)")
          }
        >
          {/* ── IMAGE ────────────────────────────────────── */}
          <div className="relative w-full rounded-t-2xl overflow-hidden flex-shrink-0"
            style={{ aspectRatio: "16/10" }}>
              

            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={project.title_card}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <ImagePlaceholder />
            )}

            {/* Gradient overlay — bottom only */}
            <div className="absolute inset-0"
              style={{ background: "rounded-full linear-gradient((90deg, rgba(25,29,75,1) 0%, rgba(5,9,73,1) 38%, rgba(141,48,5,1) 67%, rgba(163,87,9,1) 90%, rgba(212,126,5,1) 100%),0.1)" }} />

            {/* Type + duration badge — top left */}
            <span className="absolute top-3 left-3 z-10 text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(23, 35, 172, 0.09)",
                backdropFilter: "blur(6px)",
                color: "rgba(5, 6, 42, 0.92)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}>
              {project.type}{project.duration ? ` · ${project.duration}` : ""}
            </span>

            {/* Metrics chips — bottom right */}
            {metrics.length > 0 && (
              <div className="absolute bottom-2.5 right-2.5 z-10 flex gap-1.5">
                {metrics.map(({ val, lbl }) => (
                  <div key={lbl} className="flex items-center gap-1 px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(168, 167, 167, 0.19)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}>
                    <span className="text-[11px] font-bold text-blue-950">{val}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider"
                      style={{ color: "rgba(0,0,0)" }}>{lbl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── BODY ──────────────────────────────────────── */}
          {/* Đã sửa border-t-1 thành border-t và thêm màu đúng chuẩn */}
          <div className="flex flex-col flex-1 gap-2.5 p-5 border-t border-solid border-[#bab3b3] group-hover:border-[#d749167a] group-hover:bg-[#f7f7f7]" >

            {/* Domain + Title + Desc */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] mb-1.5"
                style={{ color: "#00072D" }}>
                {project.domain ?? "Business Solution"}
              </p>
              <h3 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-[#D74B16]">
                {project.title}
              </h3>
              <p className="text-[12px] text-[#00072dab] mt-1.5 leading-relaxed line-clamp-2 group-hover:text-[#00072D]">
                {project.shortDescription}
              </p>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(40,97,129,0.08)" }} />

            {/* Pain points — monochromatic */}
            {project.context.problem.length > 0 && (
              <ul className="flex flex-col gap-1.5" style={{ listStyle: "none" }}>
                {project.context.problem.slice(0, 2).map((pain, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {/* Chuyển style background sang class Tailwind */}
                    <span
                      className="mt-[5px] w-[5px] h-[5px] rounded-full flex-shrink-0 bg-[#00072d86] group-hover:bg-[#00072D] transition-colors"
                    />
                    <span className="text-[11.5px] text-[#00072dab] leading-snug group-hover:text-[#00072D] transition-colors">
                      {pain}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tags + CTA */}
            <div className="flex items-center justify-between mt-auto pt-2"
              style={{ borderTop: "1px solid rgba(40,97,129,0.07)" }}>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag}
                    className="text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full  text-[#00072dab] group-hover:text-[#00072D] "
                    style={{ background: "rgba(40,97,129,0.08)" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <span className="flex items-center gap-1 text-[12px] font-bold uppercase tracking-normal whitespace-nowrap
                opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-200"
                style={{ color: "#D74B16" }}>
                DETAILS
                <ArrowRight className="w-3 h-3" strokeWidth={3} />
              </span>
            </div>
          </div>
        </article>
      </a>
    </motion.div>
  );
}