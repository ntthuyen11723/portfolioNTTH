"use client";

import { notFound } from "next/navigation";
import { useState, useRef } from "react";
import { PROJECTS, } from "@/features/projects/constants";
import { ArtifactItem } from "@/features/projects/types";
import Link from "next/link";
import Image from "next/image";


/* ============================================================
   TINY HELPERS
   ============================================================ */

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/* ============================================================
   IMAGE CAROUSEL
   ============================================================ */

interface CarouselProps {
  images: string[];
  title?: string;
}

function Carousel({ images, title }: CarouselProps) {
  const [active, setActive] = useState(0);
  const startX = useRef(0);

  const prev = () => setActive((a) => (a === 0 ? images.length - 1 : a - 1));
  const next = () => setActive((a) => (a === images.length - 1 ? 0 : a + 1));

  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 40) { if (delta < 0) next(); else prev(); }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group select-none">
      <div
        className="relative overflow-hidden rounded-2xl border-[1pt] border-[#d7491648] aspect-video cursor-grab"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${title ?? "artifact"} - ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(
              "absolute inset-0 object-contain transition-opacity duration-500",
              i === active ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
            draggable={false}
          />
        ))}

        {/* <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" /> */}
        <div className="absolute bottom-3 right-4 text-xs font-bold tracking-widest text-white/60">
          {active + 1} / {images.length}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 flex items-center justify-center"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <>
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === active ? "w-6 bg-[#00072D]" : "w-1.5 bg-[#8d8d8d] hover:bg-slate-400"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200",
                  i === active ? "border-[#00072D] opacity-100" : "border-transparent opacity-50 hover:opacity-75"
                )}
              >
                <div className="relative w-full h-full">
                  <Image src={src} alt={`thumb-${i}`} fill sizes="80px" className="object-cover" />
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================
   ARTIFACT SECTION
   ============================================================ */

const ARTIFACT_ICONS: Record<string, string> = {
  bpmn: "⬡",
  useCase: "※", // Thêm icon cho Use Case    
  ui: "▣",
  documents: "≡",
  dataModel: "◈",
  flow: "⟳",
};

const ARTIFACT_LABELS: Record<string, string> = {
  bpmn: "BPMN Flows",
  usecases: "Use Case Diagrams", // Thêm label cho Use Case
  ui: "UI Mockups",
  documents: "Documents",
  dataModel: "Data Model",
  flow: "Flow Diagram",
};

function ArtifactSection({ type, item }: { type: string; item: ArtifactItem }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-[#00072D] text-xl">{ARTIFACT_ICONS[type] ?? "◆"}</span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00072D]">
            {ARTIFACT_LABELS[type] ?? type}
          </p>
          <h4 className="font-bold text-[#b0b2bf] text-sm">{item.title}</h4>
        </div>
      </div>
      {item.description && <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>}

      {item.externalLink && (
          <a
            href={item.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d749166c] rounded-lg text-xs font-bold text-[#d74b16] hover:bg-slate-50 transition-colors shadow-sm"
          >
            <span>VIEW ON FIGMA</span>
            <span className="text-[10px]">↗</span>
          </a>
        )}

      {item.images && item.images.length > 0 && <Carousel images={item.images} title={item.title} />}
      {item.files && item.files.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {item.files.map((f, i) => (
            <a
              key={i}
              href={f}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00072D]/30 text-[#00072D] text-xs font-bold hover:bg-[#00072D] hover:text-white transition-all duration-200"
            >
              <span>↓</span>
              {f.split("/").pop()}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   PROCESS STEP & OTHER SUB-COMPONENTS
   ============================================================ */

// function ProcessStep({ step, index, total }: { step: Project["process"]["steps"][number]; index: number; total: number }) {
//   return (
//     <div className="relative flex gap-5">
//       <div className="flex flex-col items-center">
//         <div className="w-8 h-8 rounded-full border-2 border-[#00072D] bg-white flex items-center justify-center z-10 flex-shrink-0">
//           <span className="text-[10px] font-black text-[#00072D]">{String(index + 1).padStart(2, "0")}</span>
//         </div>
//         {index < total - 1 && <div className="flex-1 w-px bg-gradient-to-b from-[#00072D]/30 to-transparent mt-1 mb-1" />}
//       </div>
//       <div className="pb-8 flex-1 min-w-0">
//         <h4 className="font-bold text-slate-900 mb-1">{step.name}</h4>
//         <p className="text-sm text-slate-500 leading-relaxed mb-3">{step.description}</p>
//         {step.output && step.output.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {step.output.map((o) => (
//               <span key={o} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00072D]/8 border border-[#00072D]/20 text-[#00072D] text-[11px] font-semibold">
//                 <span className="opacity-60">→</span> {o}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

function PainPoint({ text, index }: { text: string; index: number }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-[#00072D]/15 bg-[#00072D]/[0.04] group hover:bg-[#00072D]/[0.08] hover:border-[#00072D]/30 transition-all duration-200">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00072D]/10 border border-[#00072D]/20 flex items-center justify-center mt-0.5">
        <span className="text-[9px] font-black text-[#00072D]">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <p className="text-sm text-[#1d4f68] leading-relaxed font-medium">{text}</p>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center px-5 py-3 rounded-2xl border border-slate-200 bg-white min-w-[120px] hover:bg-[#e6f4f9] transition-colors">
      <p className="text-2xl font-black text-[#00072D]">{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xl font-black tracking-[0.3em] text-[#00072]">{index}</span>
      <div className="h-px flex-1 bg-slate-100" />
      <h2 className="text-xl font-black text-[#d74b16]">{title}</h2>
    </div>
  );
}

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const isAnSinhXaHoi = project.slug === "digital-transformation-public";

  const artifactEntries = Object.entries(project.artifacts) as [string, ArtifactItem][];

  const metricEntries: { label: string; value: number }[] = [
    project.metrics.bpmn != null
      ? {
        label: isAnSinhXaHoi ? "Use Cases" : "BPMN Flows", // <-- SỬA DÒNG NÀY
        value: project.metrics.bpmn
      }
      : null,
    project.metrics.screens != null
      ? { label: "Screens", value: project.metrics.screens }
      : null,
    project.metrics.actors != null
      ? { label: "Actors", value: project.metrics.actors }
      : null,
    project.metrics.testCases != null
      ? { label: "Test Cases", value: project.metrics.testCases }
      : null,
  ].filter(Boolean) as { label: string; value: number }[];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#00072D]/6 blur-3xl -z-10" />

        <div className="container max-w-6xl mx-auto px-4 pt-16 pb-14">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
            <Link href="/projects" className="text-[20px] hover:text-[#00072D] transition-colors">← Projects</Link>
            <span>/</span>
            <span className="text-[#e29274] text-[20px]" >{project.title}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-3">
                {/* <div className="h-px w-8 bg-[#00072D]" /> */}
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#d74b16]">{project.domain ?? project.type}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#00072d] leading-[1.1] tracking-tight">{project.title}</h1>
              <p className="text-base text-slate-500 leading-relaxed max-w-[34rem] text-justify">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-bold border border-[#d7491670] text-[#00072D] hover:bg-[#d7491616] hover:text-black bg-[#fefefe]">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-2 border-t border-slate-100">
                {project.duration && (
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#8d8d8d] font-bold">Time</span>
                    <span className="font-semibold text-slate-700">{project.duration}</span>
                  </div>
                )}
                                {project.method && (
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#8d8d8d] font-bold">Methodology </span>
                    <span className="font-semibold text-slate-700">{project.method}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#8d8d8d] font-bold">Team size</span>
                    <span className="font-semibold text-slate-700">{project.teamSize} members</span>
                  </div>
                )}
                {project.context.client && (
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#8d8d8d] font-bold">Client</span>
                    <span className="font-semibold text-slate-700">{project.context.client}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-[#8d8d8d] font-bold">Tools</span>
                  <span className="font-semibold text-slate-700">{project.tools.join(", ")}</span>
                </div>
              </div>
            </div>

            {project.heroImage && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 shadow-xl shadow-slate-200/60">
                  <Image src={project.heroImage} alt={project.title} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[#f5f5f5] mix-blend-multiply" />
                </div>
              </div>
            )}
          </div>

          {metricEntries.length > 0 && (
            <div className="px-10 mt-10 flex flex-wrap gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {metricEntries.map((m) => <MetricPill key={m.label} {...m} />)}
            </div>
          )}
        </div>
      </section>

      {/* BODY */}
      <div className="container max-w-6xl mx-auto px-4 pt-10 pb-16 md:py-18">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16">
          <div className="space-y-20">
            <section className="space-y-8">
              <SectionLabel index="01" title="CONTEXT" />
              <p className="text-base text-slate-600 leading-relaxed text-justify ">{project.context.background}</p>
              <div className="space-y-3">
                {project.context.problemdtl.map((p, i) => <PainPoint key={i} text={p} index={i} />)}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {project.context.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-[#d7491616] hover:text-white border border-slate-100 hover:border-[#d7491670] transition-colors">
                    <span className="text-[#00072D] font-black text-sm mt-0.5">✓</span>
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* <section className="space-y-8">
              <SectionLabel index="02" title="Quy trình phân tích" />
              <div>{project.process.steps.map((step, i) => <ProcessStep key={i} step={step} index={i} total={project.process.steps.length} />)}</div>
            </section> */}

            {artifactEntries.length > 0 && (
              <section className="space-y-10">
                <SectionLabel index="02" title="Artifacts & Deliverables" />
                <div className="space-y-12">
                  {artifactEntries.map(([type, item]) => {
                    // ĐÁNH TRÁO TYPE TẠI ĐÂY
                    const displayType = isAnSinhXaHoi && type === "bpmn" ? "BPMN" : type;
                    
                    return (
                      <div
                        key={type}
                        className="rounded-2xl border border-slate-100 bg-slate-50/50"
                      >
                        <ArtifactSection type={displayType} item={item} />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            <section className="space-y-8">
              <SectionLabel index="03" title="Results" />
              <div className="grid gap-8">
                <ul className="space-y-3 px-10">
                  {project.outcome.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00072D]/10 border border-[#00072D]/20 flex items-center justify-center mt-0.5">
                        <span className="text-[8px] font-black text-[#00072D]">↑</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-40 lg:self-start">
            <div className="rounded-2xl border border-[#b4b6b9] p-6 bg-white shadow-sm space-y-5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Responsibility</p>
              <div className="space-y-3">
                {project.role.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00072D]" />
                    <span className="text-sm text-slate-700 font-medium">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="rounded-2xl border border-[#00072D]/20 bg-[#00072D]/5 p-6 space-y-4">
              <p className="text-sm font-bold text-[#00072D]">Muốn trao đổi về dự án này?</p>
              <a href="mailto:ntt.huyen4125354@gmail.com" className="block w-full text-center py-2.5 rounded-xl bg-[#00072D] text-white text-sm font-bold hover:bg-[#1e5570] transition-colors">
                Liên hệ ngay →
              </a>
            </div> */}
          </aside>
        </div>
      </div>
    </div>
  );
}