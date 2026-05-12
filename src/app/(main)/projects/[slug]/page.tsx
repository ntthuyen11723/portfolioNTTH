// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { PROJECTS } from "@/features/projects/constants";
// import { Badge } from "@/components/ui/badge";
// import {
//   ArrowLeft,
//   Layers,
//   Monitor,
//   Users,
//   FileText,
//   CheckCircle2,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// export default function ProjectDetailPage({ params }: Props) {
//   const project = PROJECTS.find((p) => p.slug === params.slug);

//   if (!project) return notFound();

//   const stats = [
//     { label: "BPMN", value: project.metrics.bpmn, icon: Layers },
//     { label: "Screens", value: project.metrics.screens, icon: Monitor },
//     { label: "Actors", value: project.metrics.actors, icon: Users },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900">
//       <main className="container mx-auto max-w-6xl px-4 py-12">

//         {/* BACK */}
//         <div className="mb-12">
//           <Link
//             href="/projects"
//             className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#286181]"
//           >
//             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
//             Back to Projects
//           </Link>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-12">

//           {/* SIDEBAR */}
//           <aside className="lg:col-span-4">
//             <div className="sticky top-28 space-y-8">

//               {/* TITLE */}
//               <div>
//                 <Badge className="bg-[#e6f4f9] text-[#286181] mb-4">
//                   {project.type}
//                 </Badge>

//                 <h1 className="text-4xl font-bold leading-tight">
//                   {project.title}
//                 </h1>

//                 <p className="text-slate-500 mt-4 leading-relaxed">
//                   {project.description}
//                 </p>
//               </div>

//               {/* STATS */}
//               <div className="space-y-3">
//                 {stats.map((stat, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#286181]/30 transition"
//                   >
//                     <stat.icon className="w-5 h-5 text-[#286181]" />
//                     <div>
//                       <div className="font-bold text-lg">{stat.value}</div>
//                       <div className="text-xs text-slate-400 uppercase">
//                         {stat.label}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* TOOLS */}
//               <div>
//                 <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">
//                   Tools
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tools?.map((tool) => (
//                     <span
//                       key={tool}
//                       className="px-3 py-1 rounded-lg border text-xs font-medium bg-slate-50"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </aside>

//           {/* MAIN CONTENT */}
//           <section className="lg:col-span-8 space-y-12">

//             {/* OVERVIEW */}
//             <Card className="rounded-3xl border border-slate-200 bg-slate-50/50">
//               <CardContent className="p-8">
//                 <h2 className="text-xl font-bold mb-4">Overview</h2>
//                 <p className="text-slate-600 leading-relaxed">
//                   {project.sections.overview}
//                 </p>
//               </CardContent>
//             </Card>

//             {/* ARTIFACTS */}
//             <Card className="rounded-3xl border border-slate-200 bg-white hover:border-[#286181]/20 transition">
//               <CardContent className="p-8">
//                 <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <FileText className="w-5 h-5 text-[#286181]" />
//                   Business Artifacts
//                 </h2>
//                 <p className="text-slate-600 leading-relaxed">
//                   {project.sections.artifacts}
//                 </p>
//               </CardContent>
//             </Card>

//             {/* MOCKUPS */}
//             <Card className="rounded-3xl border border-[#286181]/20 bg-[#286181] text-white">
//               <CardContent className="p-8">
//                 <h2 className="text-xl font-bold mb-4">UI / UX Design</h2>
//                 <p className="text-white/80 leading-relaxed">
//                   {project.sections.mockups}
//                 </p>
//               </CardContent>
//             </Card>

//             {/* OUTCOME */}
//             <Card className="rounded-3xl border border-slate-200 bg-white">
//               <CardContent className="p-8">
//                 <h2 className="text-xl font-bold mb-6">Impact & Outcome</h2>
//                 <div className="flex gap-3">
//                   <CheckCircle2 className="text-[#5dcaa5] w-5 h-5 mt-1" />
//                   <p className="text-slate-600 leading-relaxed">
//                     {project.sections.outcome}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PROJECTS } from "@/features/projects/constants";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Building2,
  Target,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Layout,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 pb-20">
      {/* 1. PROGRESS BAR (Dành cho Case Study dài) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#286181] z-50 origin-left"
        style={{ scaleX: 0 }} // Bạn có thể kết nối với useScroll của framer-motion
      />

      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* BACK BUTTON */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#286181] transition-colors"
          >
            <div className="p-2 rounded-full border border-slate-200 group-hover:border-[#286181] transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Projects
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* ===== SIDEBAR: THÔNG TIN TỔNG QUAN ===== */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-[#e6f4f9] text-[#286181] hover:bg-[#e6f4f9] border-none px-4 py-1 mb-6">
                  {project.type}
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900">
                  {project.title}
                </h1>

                <p className="text-lg text-slate-500 mt-6 leading-relaxed">
                  {project.shortDescription}
                </p>
              </motion.div>

              {/* QUICK INFO BOX */}
              <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm space-y-4">
                {project.context.client && (
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                    <div className="p-2 rounded-lg bg-slate-50 text-[#286181]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span>{project.context.client}</span>
                  </div>
                )}
                <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                   <div className="p-2 rounded-lg bg-slate-50 text-[#286181]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>2023 - Present</span>
                </div>
              </div>

              {/* TOOLS WITH CHIP STYLE */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-4 tracking-widest">
                  Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-1.5 rounded-full border border-slate-200 text-[13px] font-medium bg-white text-slate-600 hover:border-[#286181] hover:text-[#286181] transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ===== MAIN CONTENT: CHI TIẾT PHÂN TÍCH ===== */}
          <section className="lg:col-span-8 space-y-20">
            
            {/* CONTEXT & PROBLEM */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-[#286181] rounded-full" />
                <h2 className="text-2xl font-bold">01. Project Context</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.context.background}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-[2rem] border-none bg-red-50/50 shadow-none">
                  <CardContent className="p-8">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                      <Target className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-bold text-red-900 mb-4">Pain Points</h3>
                    <ul className="space-y-3">
                      {project.context.problem.map((p, i) => (
                        <li key={i} className="text-sm text-red-800/80 flex gap-2">
                          <span className="font-bold">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-[2rem] border-none bg-blue-50/50 shadow-none">
                  <CardContent className="p-8">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-blue-900 mb-4">Objectives</h3>
                    <ul className="space-y-3">
                      {project.context.objectives.map((g, i) => (
                        <li key={i} className="text-sm text-blue-800/80 flex gap-2">
                          <span className="font-bold">•</span> {g}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* PROCESS - Dạng Timeline hiện đại */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-[#286181] rounded-full" />
                <h2 className="text-2xl font-bold">02. Analytical Process</h2>
              </div>

              <div className="space-y-4">
                {project.process.steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#286181]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex gap-6">
                      <span className="text-4xl font-black text-slate-100 group-hover:text-[#e6f4f9] transition-colors">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ARTIFACTS - Gallery được tối ưu */}
            <section className="space-y-8">
               <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-[#286181] rounded-full" />
                <h2 className="text-2xl font-bold">03. Key Artifacts</h2>
              </div>

              {/* BPMN Section */}
              {project.artifacts.bpmn && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[#286181] font-bold text-sm uppercase tracking-wider">
                    <Layers className="w-4 h-4" /> {project.artifacts.bpmn.title}
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {project.artifacts.bpmn.images?.map((img, i) => (
                      <div key={i} className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white">
                        <Image
                          src={img}
                          alt="BPMN Diagram"
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* UI Section */}
              {project.artifacts.ui && (
                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-2 text-[#286181] font-bold text-sm uppercase tracking-wider">
                    <Layout className="w-4 h-4" /> {project.artifacts.ui.title}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.artifacts.ui.images?.map((img, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ y: -5 }}
                        className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-slate-100"
                      >
                        <Image
                          src={img}
                          alt="UI Design"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* OUTCOME - Chốt hạ bằng kết quả */}
            <section className="pt-10">
              <div className="p-10 rounded-[3rem] bg-[#286181] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <CheckCircle2 className="text-[#5dcaa5]" />
                  Final Impact & Outcome
                </h2>

                <div className="grid md:grid-cols-1 gap-4">
                  {project.outcome.impact.map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-white/90">
                      <div className="h-2 w-2 rounded-full bg-[#5dcaa5] mt-2 shrink-0" />
                      <p className="text-sm font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </section>
        </div>
      </main>
    </div>
  );
}