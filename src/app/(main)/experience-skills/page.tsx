"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  FileSearch,
  Brain,
  GitBranch,
  Layout,
  CheckCircle,
  Users,
  Database,
  Lightbulb,
} from "lucide-react";
import Image  from "next/image";

/* ================= DATA: EXPERIENCE ================= */

const steps = [
  {
    title: "Requirement Gathering",
    desc: "Stakeholder Interviews & Initial Documentation",
    icon: FileSearch,
  },
  {
    title: "Requirement Analysis",
    desc: "Detailed Analysis, Process Modeling & Requirement Validation",
    icon: Brain,
  },
  {
    title: "Design Phase",
    desc: "UI/UX Collaboration, Design Sign-off",
    icon: GitBranch,
  },
  {
    title: "Implementation & Development",
    desc: "Adopt a 'Given-When-Then' structure to clarify business logic, Change Management",
    icon: Layout,
  },
  {
    title: "Testing Phase",
    desc: "QA Support, UAT Facilitation",
    icon: Users,
  },
  {
    title: "Deployment & Maintenance",
    desc: "Deployment & Maintenance, End-User Training",
    icon: CheckCircle,
  },
];

const TIMELINE_DATA = [
  {
    id: "honeynet",
    type: "work",
    role: "IT Business Analyst",
    organization: "HONEYNET.,JS",
    time: "05/2025 - April 2026",
    icon: Briefcase,
    summary: "",
    responsibilities: [
      "Elicited and analyzed business requirements through stakeholder discussions to define project scope and functional specifications",
      "Transformed complex business requirements into structured project artifacts, including BRD, SRS, and User Stories",
      "Modeled business processes (BPMN) and system workflows to support development and ensure alignment with business objectives",
      "Designed wireframes and mockups (Figma, Draw.io) for web and mobile applications to visualize user flows and system interactions",
      "Facilitated communication between business stakeholders and technical teams to ensure clear understanding and successful project delivery",
      "Prepared and executed User Acceptance Testing (UAT), ensuring delivered features met business expectations",
      "Supported end-users through comprehensive documentation and training activities to facilitate system adoption",
    ],
    domain: [
      "ERP - Enterprise Resource Planning",
      "Government",
      "Transportation Technology",
      "Inventory & Warranty Management",
    ],
    impact: [
      "Clarifying Requirements & Stakeholder Engagement",
      "Process Optimization via BPMN Modeling",
      "Accelerating Validation with Visual Mockups",
      "Cross-functional Collaboration & Project Delivery",
      "UAT Enhancement & Testing Support",
      "User Training & System Adoption",
    ],
    metrics: {
      flows: 11,
      screens: 35,
      actors: 6,
    },
    tags: ["BPMN", "Figma", "UAT", "Agile"],
  },
  {
    id: "vanlang",
    type: "education",
    role: "Bachelor of Management Information Systems",
    organization: "Van Lang University",
    time: "2022 - 2026",
    icon: GraduationCap,
    summary: "",
    responsibilities: [
      "Advanced studies in System Analysis & MIS",
      "Academic Leader for 50/56 courses within the curriculum",
      "AI Research: Conducting academic research on Generative AI adoption",
      "Startup Initiative: Developing Blockchain-based startup and technology projects",
    ],
    domain: [
      "Major of Management Information Systems",
      "Research paper (Scopus)",
      "Startup (Blockchain)",
    ],
    impact: [
      "Develop systems thinking and analytical mindset",
      "Enhance research and critical thinking capabilities",
      "Apply academic knowledge to real-world projects",
    ],
    metrics: {
      gpa: "3.12/4.0",
    },
    tags: ["System Analysis", "Research", "Blockchain", "Team Leadership", "Planning"],
  },
];

/* ================= DATA: SKILLS ================= */

const TECHNICAL_STACK = [
  "Process Modeling: BPMN 2.0, Activity Diagram, Use Case Diagram",
  "Data Modeling: ERD",
  "Documentation: SRS, BRD, FRS, User Guide",
  "Requirements Management: Backlog, User Story, Acceptance Criteria",
  "UX/UI Design: Wireframing & Prototyping",
  "Data & Analytics: MySQL, Power BI",
  "Testing & Validation: Test Case Design, UAT Planning & Execution",
];

const SOFT_SKILLS = [
  "Requirement elicitation & stakeholder facilitation",
  "Cross-functional communication (business & technical teams)",
  "Analytical thinking & root cause analysis",
  "Documentation rigor & attention to detail",
  "Self-directed learning & adaptability",
];

const SKILL_CATEGORIES = [
  {
    title: "Analysis Tools",
    subtitle: "Design & Modeling",
    icon: Layout,
    desc: "Proficient in using visualization tools to optimize the communication process between Stakeholders and Dev",
    tags: ["Figma", "Draw.io", "Visio", "Power BI", "GenAI", "Microsoft Office", "Google Workspace", "Notion","Jira","Odoo"],
  },
];

/* ================= SHARED COMPONENTS ================= */

const IconBox = ({ icon: Icon, className = "" }: { icon: React.ElementType; className?: string }) => (
  <div className={`w-14 h-14 rounded-2xl bor border-[#00072D] shadow-lg shadow-[#00072D]/20 flex items-center justify-center shrink-0 ${className}`}>
    <Icon className="w-6 h-6 text-[#00072D]" />
  </div>
);

// Component tạo List Box với style bạn yêu cầu
const SkillListItem = ({ text, index, dark = false }: { text: string; index: number; dark?: boolean }) => {
  // Thay đổi style dựa trên Dark Mode (Cột trái) hay Light Mode (Cột phải)
  const baseClasses = dark
    ? "flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 group hover:bg-white/10 hover:border-white/30 transition-all duration-200"
    : "flex items-center gap-4 p-4 rounded-xl border border-[#00072D]/15 bg-[#00072D]/[0.04] group hover:bg-[#00072D]/[0.08] hover:border-[#00072D]/30 transition-all duration-200";

  const numBoxClasses = dark
    ? "flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
    : "flex-shrink-0 w-6 h-6 rounded-full bg-[#00072D]/10 border border-[#00072D]/20 flex items-center justify-center";

  const textClasses = dark
    ? "text-sm text-slate-200 leading-relaxed font-medium group-hover:text-white transition-colors"
    : "text-sm text-[#1d4f68] leading-relaxed font-medium group-hover:text-[#00072D] transition-colors";

  const numTextClasses = dark
    ? "text-[9px] font-black text-white"
    : "text-[9px] font-black text-[#00072D]";

  return (
    <div className={baseClasses}>
      <div className={numBoxClasses}>
        <span className={numTextClasses}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className={textClasses}>{text}</p>
    </div>
  );
};

/* ================= MAIN PAGE ================= */

export default function ExperienceAndSkillsPage() {
  return (
    <div className="min-h-screen bg-white pb-16">

      {/* ===== 1. HEADER ===== */}
      <section className="pt-20 border-b animate-in fade-in slide-in-from-left-8 duration-1000 border-slate-100 pb-15">
        <div className="container max-w-6xl mx-auto px-4 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1.5 w-10 bg-[#00072D] rounded-full" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#d74b16]">
            Experiences <span className="text-[#00072D]">&</span> Skills
          </h1>

          <p className="text-slate-500 text-lg max-w-4xl mt-4">
            A professional showcase of my BA expertise, academic background, and technical toolset
          </p>
          <p className="text-slate-500 text-lg">
            Delivering end-to-end project experiences throughout the software development life cycle
          </p>
        </div>
      </section>

      {/* ===== 2. TIMELINE SECTION ===== */}
      <section className="pb-16 pt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 bg-gradient-to-b from-white to-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="relative space-y-12 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-slate-200 ">
            {TIMELINE_DATA.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="relative pl-14">
                  {/* TIMELINE DOT */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white border border-[#00072d] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00072D]" />
                  </div>

                  {/* CARD */}
                  <Card className="rounded-[2rem] hover:bg-[#f4f4f4c3] hover:border-[#D74B16]/30 border border-slate-200/60 bg-[#ffffff] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(40,97,129,0.08)] transition-all duration-300 relative overflow-hidden">
                    {/* HEADER */}
                    <CardHeader className="p-10 pb-0">
                      <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
                        <Badge className="bg-slate-100 text-slate-500">
                          {item.type === "work" ? "JUNIOR" : "Education"}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-[#00072d] font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.time}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#D74B16]">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-400 uppercase font-semibold">
                        {item.organization}
                      </p>
                    </CardHeader>

                    {/* CONTENT */}
                    <CardContent className="p-10 pt-0 text-justify">
                      {item.summary && <p>{item.summary}</p>}

                      {/* METRICS */}
                      {item.metrics && (
                        <div className="flex gap-4 text-sm text-slate-600 pt-7">
                          {item.metrics.flows && <span>Flows: {item.metrics.flows}</span>}
                          {item.metrics.screens && <span>Screens: {item.metrics.screens}</span>}
                          {item.metrics.actors && <span>Actors: {item.metrics.actors}</span>}
                          {item.metrics.gpa && <span>GPA: {item.metrics.gpa}</span>}
                        </div>
                      )}

                      {/* GRID */}
                      <div className="grid md:grid-cols-6 gap-10 mt-[10px]">
                        {/* RESPONSIBILITIES */}
                        <div className="col-start-1 col-end-5 flex flex-col gap-4">
                          <ul className="space-y-2">
                            {item.responsibilities.map((r, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#00072d] rounded-full mt-[6px] flex-shrink-0" />
                                <span className="leading-relaxed">{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* DOMAIN */}
                        <div className="col-span-2 col-end-7">
                          <h4 className="text-xs uppercase text-[#D74B16] mb-3 font-bold">Domain</h4>
                          <ul className="space-y-2">
                            {item.domain.map((d, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#08c340] rounded-full mt-[6px] flex-shrink-0" />
                                <span className="leading-relaxed">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* IMPACT */}
                      <div className="rounded-xl bg-[#eaeaea] border shadow-lg hover:border-[#00072d]/30 border-slate-100 max-w-6xl p-6 mt-6">
                        <h4 className="text-xs uppercase text-[#D74B16] mb-2 font-bold">Impact</h4>
                        <ul className="space-y-2">
                          {item.impact.map((imp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-[#00072d] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2 pt-6">
                        {item.tags.map((tag) => (
                          <Badge key={tag} className="bg-slate-50 text-slate-500 transition">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#00072d]" />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 3. BA PROCESS LIFECYCLE ===== */}
      <section className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            className="h-1.5 bg-[#00072D] mx-auto rounded-full"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            BA Lifecycle
          </h2>
        </div>

        <div className="relative">
          {/* ĐƯỜNG NỐI */}
          <div className="hidden md:block absolute top-[45px] left-[5%] right-[5%] h-[3px] bg-gradient-to-r from-blue-100 via-[#00072D]/40 to-blue-100 z-0" />

          {/* CẤU TRÚC CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col h-full group"
                >
                  {/* ICON & NUMBER */}
                  <div className="relative mb-8 flex justify-center shrink-0">
                    <div className="w-[86px] h-[86px] rounded-full bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center group-hover:border-[#00072D] group-hover:shadow-[#00072D]/20 transition-all duration-500">
                      <Icon className="w-8 h-8 text-[#00072D]" />
                    </div>
                    <div className="absolute -bottom-2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-white shadow-sm">
                      0{index + 1}
                    </div>
                  </div>

                  {/* NỘI DUNG */}
                  <div className="flex-1 flex flex-col p-6 rounded-[2rem] bg-gradient-to-b from-white to-slate-50 border border-slate-100 group-hover:border-[#d74b16]/30 group-hover:to-orange-50/30 transition-all duration-500">
                    <h3 className="font-bold text-[#000] text-[15px] md:text-base mb-3 leading-tight min-h-[40px] flex items-center justify-center text-center group-hover:text-[#D74B16]">
                      {step.title}
                    </h3>
                    <div className="w-6 h-1 bg-[#00072D]/20 rounded-full mx-auto mb-4 group-hover:w-12 group-hover:bg-[#00072D] transition-all" />
                    <p className="text-[13px] text-slate-500 leading-relaxed text-center font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      {/* <div className="container max-w-6xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-16" />
      </div> */}

      {/* ===== 4. SKILLS & TOOLS ECOSYSTEM ===== */}
      <section className="flex flex-col pt-14 max-w-6xl mx-auto px-4 space-y-10">

        {/* CORE COMPETENCIES */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 bg-[#00072D] rounded-full" />
            <span className="text-[20px] font-bold uppercase tracking-[0.1em] text-[#D74B16]">Core Competencies</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
          >
            {/* Cột trái: Technical Stack (Dark Theme) */}
            <div className="bg-[#00072D] p-10 md:p-14 flex flex-col justify-center space-y-10 relative overflow-hidden">
              {/* <div className="absolute top-0 right-0 w-64 h-64 bg-[#D74B16] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none" /> */}

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <IconBox icon={Database} className="bg-white shadow-none text-[#00072D]" />
                <div>
                  <h4 className="text-3xl font-bold text-white leading-tight mb-2">Technical </h4>
                  {/* <p className="text-slate-300 font-medium text-sm">Nền tảng kỹ thuật và công cụ xử lý dữ liệu.</p> */}
                </div>
              </div>

              {/* Box List - Technical (Dark) */}
              <div className="relative z-10 space-y-3">
                {TECHNICAL_STACK.map((tech, index) => (
                  <SkillListItem key={index} text={tech} index={index} dark={true} />
                ))}
              </div>
            </div>

 {/* Cột phải: Soft Skills (Light Theme) */}
            {/* Thêm 'relative' và 'overflow-hidden' vào container cha */}
            <div className="relative overflow-hidden p-10 md:p-14 flex flex-col border border-[#00072D]/20 rounded-r-[2.5rem] bg-[#d7491609] space-y-10">
              
              {/* Nội dung Header */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <IconBox icon={Lightbulb} className="bg-[#f8f9fa] border border-[#00072D]/70 shadow-none text-[#00072D]" />
                <div>
                  <h4 className="text-3xl font-bold text-[#d74b16] leading-tight mb-2">Soft Skills</h4>
                </div>
              </div>

              {/* Box List - Soft Skills (z-10) */}
              <div className="relative z-10 space-y-3">
                {SOFT_SKILLS.map((skill, index) => (
                  <SkillListItem key={index} text={skill} index={index} dark={false} />
                ))}
              </div>

              {/* HÌNH ẢNH CHIBI GÓC DƯỚI PHẢI */}
              {/* Thay đổi: z-20 (đè lên text), bottom-5, w/h +10pt dùng hàm calc() */}
              <div className="absolute bottom-5 right-0 w-[calc(12rem)] h-[calc(15rem)] md:w-[calc(15rem)] md:h-[calc(15rem)] z-20 pointer-events-none opacity-90">
                <Image 
                  src="/mechibi.png" 
                  alt="Chibi Avatar" 
                  fill 
                  className="object-contain object-bottom"
                />
              </div>

            </div>
          </motion.div>
        </div>

        {/* SKILL CATEGORIES (Analysis Tools & Business Analysis) */}
       <div className="">
          {SKILL_CATEGORIES.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[2.5rem] bg-[#d7491609] hover:bg-[#00072D]/[0.08] border-[1.5pt] border-[#00072D]/20 shadow-xl shadow-slate-200/40 flex flex-col h-full"
            >
              {/* Header: Icon, Subtitle và Title trên cùng 1 hàng */}
              <div className="flex items-center group-hover:border-[#00072D] border-[#00072D]/20 gap-5 mb-6">
                <IconBox icon={item.icon} className="shrink-0 hover:bg-[#00072D]/[0.05] border border-[#00072D]/20" />
                
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#00072D]/60 uppercase tracking-[0.2em] mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-[#D74B16] group-hover:text-[#00072D]">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-slate-500 font-medium mb-6 flex-1 group-hover:text-black">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2  ">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#ffffff] border-orange-300 text-[#00072D] border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}