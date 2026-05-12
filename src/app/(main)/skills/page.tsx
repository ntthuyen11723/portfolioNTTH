"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Sparkles,
  Database,
  Layout,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

/* ================= DATA & CONSTANTS ================= */

const RADAR_DATA = [
  { skill: "Analysis", value: 95 },
  { skill: "Modeling", value: 90 },
  { skill: "Documentation", value: 92 },
  { skill: "UI/UX", value: 88 },
  { skill: "Stakeholder", value: 92 },
];

const SKILL_CATEGORIES = [
  {
    title: "Business Analysis",
    subtitle: "Core Deliverables",
    icon: FileText,
    desc: "Chuyển đổi yêu cầu kinh doanh thành giải pháp số thông qua hệ thống tài liệu chuẩn mực (SRS, User Stories).",
    tags: ["SRS", "BPMN 2.0", "User Stories", "UAT"],
  },
  {
    title: "Analysis Tools",
    subtitle: "Design & Modeling",
    icon: Layout,
    desc: "Sử dụng thành thạo các công cụ trực quan hóa để tối ưu hóa quy trình trao đổi giữa Stakeholders và Dev.",
    tags: ["Figma", "Draw.io", "Visio", "Power BI"],
  },
];

const TECHNICAL_STACK = [
  { name: "SQL (Data Query)", level: 85 },
  { name: "Postman (API Testing)", level: 80 },
  { name: "Python (Data Analysis)", level: 70 },
  { name: "HTML/CSS (Basic)", level: 75 },
];

const TIMELINE = [
  {
    year: "2022 - 2026",
    title: "MIS Foundation",
    desc: "Nền tảng hệ thống thông tin & tư duy phân tích.",
  },
  {
    year: "Early 2025",
    title: "Research",
    desc: "Tiếp cận GenAI & Blockchain.",
  },
  {
    year: "Mid 2025",
    title: "IT Business Analyst",
    desc: "Thực chiến SRS, BPMN, UI/UX.",
  },
  {
    year: "2026",
    title: "Professional Growth",
    desc: "Nâng cao kỹ năng BA & hệ thống.",
  },
];
/* ================= SHARED COMPONENTS ================= */

// Icon Box chuẩn hóa cho toàn bộ trang
const IconBox = ({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) => (
  <div className={`w-14 h-14 rounded-2xl bg-[#286181] shadow-lg shadow-[#286181]/20 flex items-center justify-center shrink-0 ${className}`}>
    <Icon className="w-6 h-6 text-white" />
  </div>
);

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[13px] font-bold text-slate-700">{name}</span>
      <span className="text-[11px] font-mono font-bold text-[#286181]">{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-[#286181]"
      />
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-slate-50">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-6 bg-[#e6f4f9] text-[#286181] hover:bg-[#e6f4f9] border-none px-4 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Skills & Tools Ecosystem
            </Badge>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Năng lực <span className="text-[#286181]">& Công cụ</span>
          </h1>

          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-medium">
            Hệ thống hóa kỹ năng chuyên môn giúp tối ưu hóa giá trị sản phẩm trong mọi giai đoạn phát triển.
          </p>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4 py-20 space-y-24">
        
        {/* 2. RADAR CAPABILITY */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 bg-[#286181] rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Capability Overview</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
          >
            <div className="bg-[#286181] p-12 flex items-center justify-center min-h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={RADAR_DATA} outerRadius="80%">
                  <PolarGrid stroke="rgba(255,255,255,0.15)" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }} />
                  <Radar dataKey="value" stroke="#fff" strokeWidth={2} fill="#fff" fillOpacity={0.2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="p-12 flex flex-col justify-center space-y-8">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-slate-900">Phân tích đa chiều</h3>
                <p className="text-slate-500 font-medium">Định vị năng lực cốt lõi dựa trên quy trình BA chuẩn quốc tế.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {RADAR_DATA.map((d) => (
                  <div key={d.skill} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-[#286181]/20 hover:bg-white transition-all">
                    <span className="text-sm font-bold text-slate-700">{d.skill}</span>
                    <span className="text-xs font-mono font-bold text-[#286181] bg-[#286181]/5 px-3 py-1 rounded-lg">
                      {d.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. SKILL CATEGORIES (Đồng bộ Icon với thiết kế 1) */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col h-full"
            >
              <IconBox icon={item.icon} className="mb-8" />
              
              <span className="text-[11px] font-bold text-[#286181]/60 uppercase tracking-[0.2em] mb-2">
                {item.subtitle}
              </span>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-[15px] leading-relaxed text-slate-500 font-medium mb-8 flex-1">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#286181]/5 text-[#286181]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. TECHNICAL FOUNDATION (Đồng bộ Icon với thiết kế 1) */}
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 bg-[#286181] rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Development Foundation</span>
          </div>

          <Card className="rounded-[2.5rem] border-slate-100 shadow-2xl shadow-slate-200/50">
            <CardContent className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                <IconBox icon={Database} />
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 leading-tight">Technical Stack</h4>
                  <p className="text-slate-500 font-medium">Khả năng làm việc trực tiếp với dữ liệu và hệ thống kỹ thuật.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                {TECHNICAL_STACK.map((tech) => (
                  <SkillBar key={tech.name} name={tech.name} level={tech.level} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. GROWTH JOURNEY */}
        <section className="pt-20 pb-16 border-t border-slate-100 overflow-hidden">
          <div className="flex flex-col items-center text-center mb-14 space-y-3">
            <div className="h-1.5 w-12 bg-[#286181] rounded-full" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Growth Journey
            </h2>

            <p className="text-slate-500 font-medium text-sm">
              Từ nền tảng đến thực chiến Business Analysis.
            </p>
          </div>

          <div className="relative">
            {/* LINE */}
            <div className="absolute top-[7px] left-4 right-[-100px] h-[2px] 
              bg-gradient-to-r from-[#286181] via-[#286181]/40 to-transparent 
              hidden md:block z-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
              
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group pr-4 pb-6"
                >
                  {/* Node */}
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#286181] mb-5 
                    transition-all duration-300 
                    group-hover:bg-[#286181] 
                    group-hover:scale-150"
                  />

                  {/* Content */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-[#286181] uppercase tracking-[0.2em]">
                      {item.year}
                    </div>

                    <div className="text-[14px] font-bold text-slate-900 group-hover:text-[#286181] transition-colors">
                      {item.title}
                    </div>

                    <div className="text-[12px] text-slate-500 font-medium leading-snug">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* FUTURE - Highlight Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden md:block pr-4 pb-6 group"
              >
                {/* Node nổi bật hơn */}
                <div className="w-4 h-4 rounded-full bg-[#286181] border-2 border-white shadow-[0_0_0_4px_rgba(40,97,129,0.15)] mb-5 
                  group-hover:scale-125 transition-all duration-300 relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#286181] blur-md opacity-40 animate-pulse" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-[#286181] uppercase tracking-[0.2em]">
                    Future
                  </div>

                  <div className="text-[15px] font-bold text-slate-900 group-hover:text-[#286181] transition-colors">
                    Senior BA Path
                  </div>

                  <div className="text-[13px] text-slate-600 font-medium leading-snug max-w-[200px]">
                    Phát triển System Thinking và Solution Design để dẫn dắt sản phẩm.
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </section>
    </div>
  );
}