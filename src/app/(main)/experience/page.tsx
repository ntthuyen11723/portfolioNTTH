"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
} from "lucide-react";

/* ================= DATA ================= */

const TIMELINE_DATA = [
  {
    id: "honeynet",
    type: "work",
    role: "IT Business Analyst",
    organization: "HONEYNET.,JSC",
    time: "05/2025 - Present",
    icon: Briefcase,

    summary:
      "Chuyển đổi yêu cầu nghiệp vụ thành tài liệu hệ thống và thiết kế giúp team dev triển khai chính xác và giảm rework.",

    responsibilities: [
      "Thu thập & làm rõ yêu cầu với stakeholders",
      "Phân tích nghiệp vụ và xác định scope",
      "Hỗ trợ UAT và đào tạo người dùng",
    ],

    deliverables: [
      "BPMN flows",
      "SRS documentation",
      "Wireframes / UI mockups",
      "User Guide",
    ],

    impact: [
      "Giảm ambiguity trong yêu cầu",
      "Giúp dev implement đúng ngay từ đầu",
      "Tăng tốc độ align giữa business & tech",
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
    role: "Bachelor of MIS",
    organization: "Van Lang University",
    time: "2022 - 2026",
    icon: GraduationCap,

    summary:
      "Xây dựng nền tảng phân tích hệ thống, dữ liệu và nghiên cứu khoa học trong lĩnh vực công nghệ.",

    responsibilities: [
      "Học tập chuyên sâu về System Analysis & MIS",
      "Thực hiện nghiên cứu khoa học",
      "Tham gia các dự án startup và công nghệ",
    ],

    deliverables: [
      "Research paper (Scopus)",
      "Startup proposal (Blockchain)",
      "System analysis assignments",
    ],

    impact: [
      "Phát triển tư duy phân tích hệ thống",
      "Nâng cao khả năng research & critical thinking",
      "Ứng dụng kiến thức vào dự án thực tế",
    ],

    metrics: {
      gpa: "3.12/4.0",
    },

    tags: ["System Analysis", "Research", "Blockchain"],
  },
];

/* ================= PAGE ================= */

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* ===== HEADER ===== */}
      <section className="pt-20 pb-12 border-b border-slate-100">
        <div className="container max-w-4xl mx-auto px-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-10 bg-[#286181] rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Career Roadmap
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Kinh nghiệm <span className="text-[#286181]">&</span> Học vấn
          </h1>

          <p className="text-slate-500 text-lg max-w-2xl">
            Tập trung vào việc chuyển đổi yêu cầu kinh doanh thành giải pháp kỹ
            thuật thông qua phân tích hệ thống và thiết kế.
          </p>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container max-w-4xl mx-auto px-4">

          <div className="relative space-y-12 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-slate-200">
            
            {TIMELINE_DATA.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="relative pl-14">

                  {/* TIMELINE DOT */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#286181]" />
                  </div>

                  {/* CARD */}
                  <Card
                    className="
                      rounded-[2rem]
                      border border-slate-200/60
                      bg-white
                      shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_20px_50px_rgba(40,97,129,0.08)]
                      transition-all duration-300
                      relative
                      overflow-hidden
                    "
                  >
                    {/* HEADER */}
                    <CardHeader className="p-6 md:p-8 pb-0 space-y-3">
                      
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <Badge className="bg-slate-100 text-slate-500">
                          {item.type === "work" ? "Professional" : "Education"}
                        </Badge>

                        <div className="flex items-center gap-2 text-xs text-[#286181] font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.time}
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {item.role}
                      </h3>

                      <p className="text-sm text-slate-400 uppercase font-semibold">
                        {item.organization}
                      </p>

                      {/* METRICS */}
                      {item.metrics && (
                        <div className="flex gap-4 text-sm text-slate-600 pt-2">
                          {item.metrics.flows && (
                            <span>Flows: {item.metrics.flows}</span>
                          )}
                          {item.metrics.screens && (
                            <span>Screens: {item.metrics.screens}</span>
                          )}
                          {item.metrics.actors && (
                            <span>Actors: {item.metrics.actors}</span>
                          )}
                          {item.metrics.gpa && (
                            <span>GPA: {item.metrics.gpa}</span>
                          )}
                        </div>
                      )}
                    </CardHeader>

                    {/* CONTENT */}
                    <CardContent className="p-6 md:p-8 space-y-6">

                      {/* SUMMARY */}
                      <p className="text-sm text-slate-500 border-l-2 border-[#286181] pl-4 italic">
                        {item.summary}
                      </p>

                      {/* GRID */}
                      <div className="grid md:grid-cols-2 gap-6">

                        {/* RESPONSIBILITIES */}
                        <div>
                          <h4 className="text-xs uppercase text-slate-400 mb-3 font-bold">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {item.responsibilities.map((r, i) => (
                              <li key={i} className="text-sm text-slate-600 flex gap-2">
                                <span className="w-1.5 h-1.5 bg-[#286181] rounded-full mt-2" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* DELIVERABLES */}
                        <div>
                          <h4 className="text-xs uppercase text-slate-400 mb-3 font-bold">
                            Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {item.deliverables.map((d, i) => (
                              <li key={i} className="text-sm text-slate-600 flex gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* IMPACT */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="text-xs uppercase text-slate-400 mb-2 font-bold">
                          Impact
                        </h4>

                        <ul className="space-y-2">
                          {item.impact.map((i, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-[#286181] mt-0.5" />
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-slate-50 text-slate-500 hover:bg-[#286181] hover:text-white transition"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                    </CardContent>
                    <div className="absolute right-0 top-0 h-full w-1 bg-[#286181]" />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}