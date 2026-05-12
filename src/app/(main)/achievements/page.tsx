import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  BookOpenCheck,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const ACHIEVEMENTS = [
  {
    type: "Research",
    title:
      "GenAI in Higher Education: Student Adoption & Future Research Agenda",
    org: "Scopus Indexed Publication",
    impact: "Published international paper (Scopus) • Academic research contribution",
    description:
      "Phân tích hành vi tiếp cận GenAI của sinh viên và đề xuất hướng nghiên cứu tương lai, tập trung vào adoption factors và educational impact.",
    icon: BookOpenCheck,
    year: "2025",
  },
  {
    type: "Competition",
    title: "Top 21 Startup Projects - Trustify CRS",
    org: "Ra Khoi 2025 • Switch On Sustainability",
    impact: "Top 21 / National Startup Competition • Blockchain solution",
    description:
      "Xây dựng giải pháp minh bạch hóa hoạt động từ thiện bằng Blockchain. Phụ trách phân tích nghiệp vụ, mô hình vận hành và tính khả thi hệ thống.",
    icon: Trophy,
    year: "2025",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* HEADER */}
      <section className="pt-20 pb-16 border-b border-slate-100">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-10 bg-[#286181] rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Achievements
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Giải thưởng <span className="text-[#286181]">& Nghiên cứu</span>
            </h1>

            <p className="text-slate-500 max-w-5xl">
              Thể hiện năng lực phân tích, nghiên cứu và khả năng áp dụng vào bài toán thực tế.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container max-w-5xl mx-auto px-4 py-16 space-y-8">
        {ACHIEVEMENTS.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="border border-slate-200 rounded-2xl hover:border-[#286181]/30 hover:shadow-lg transition-all"
            >
              <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                {/* LEFT META */}
                <div className="md:w-40 flex md:flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#286181]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#286181]" />
                    </div>

                    <Badge className="bg-slate-100 text-slate-500 border-none text-[10px] font-bold uppercase">
                      {item.type}
                    </Badge>
                  </div>

                  <span className="text-xs text-slate-400 font-medium">
                    {item.year}
                  </span>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#286181] font-semibold mt-1">
                      {item.org}
                    </p>
                  </div>

                  {/* IMPACT (VERY IMPORTANT FOR BA) */}
                  <div className="px-4 py-3 rounded-xl bg-[#286181]/5 border border-[#286181]/10 text-sm font-medium text-[#286181]">
                    {item.impact}
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Action */}
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      className="text-slate-600 hover:text-[#286181] px-0"
                    >
                      View details <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* CERTIFICATES */}
        <div className="pt-16 border-t border-slate-100">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-10 text-center">
            Certificates
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "English Aptis ESOL",
              "MOS Word",
              "MOS Excel",
              "MOS PowerPoint",
            ].map((cert) => (
              <div
                key={cert}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#286181]/30 hover:shadow-md transition-all text-center"
              >
                <GraduationCap className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-slate-800">
                  {cert}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}