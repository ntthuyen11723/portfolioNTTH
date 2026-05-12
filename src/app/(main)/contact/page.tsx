import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// LinkedIn Icon
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function HireMePage() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "ntt.huyen4125354@gmail.com",
      href: "mailto:ntt.huyen4125354@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+84 333 943 170",
      href: "tel:+84333943170",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/huyen-ntt",
      href: "https://linkedin.com/in/huyen-ntt",
    },
  ];

  const values = [
    {
      title: "Requirement Clarity",
      desc: "Chuyển đổi yêu cầu mơ hồ thành tài liệu rõ ràng (SRS, Use Case).",
    },
    {
      title: "Process Modeling",
      desc: "Mô hình hóa nghiệp vụ bằng BPMN giúp team dev hiểu đúng logic.",
    },
    {
      title: "Business ↔ Tech Bridge",
      desc: "Kết nối stakeholder và dev, giảm sai lệch trong triển khai.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* HERO */}
      <section className="pt-24 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

        <div className="container max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f4f9] text-[#286181] text-[10px] font-bold uppercase tracking-widest">
            <Send className="w-3 h-3" /> Available for Work
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Tôi giúp biến <span className="text-[#286181]">yêu cầu mơ hồ</span> <br />
            thành <span className="text-[#286181]">giải pháp rõ ràng</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Junior Business Analyst với kinh nghiệm trong Digital Transformation, 
            chuyên phân tích yêu cầu, mô hình hóa quy trình và hỗ trợ triển khai hệ thống.
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="mailto:ntt.huyen4125354@gmail.com"
              className="px-6 py-3 rounded-xl bg-[#286181] text-white font-bold hover:opacity-90 transition"
            >
              Hire Me
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:border-[#286181]/40 hover:text-[#286181]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="container max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item) => (
            <Card
              key={item.title}
              className="border border-slate-200 rounded-2xl hover:border-[#286181]/30 hover:shadow-md transition-all"
            >
              <CardContent className="p-6 space-y-3">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="container max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.label} href={item.href} target="_blank">
                <Card className="rounded-2xl border border-slate-200 hover:border-[#286181]/30 hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#286181]/10 flex items-center justify-center text-[#286181]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase text-slate-400 font-bold">
                      {item.label}
                    </span>
                    <p className="font-semibold text-slate-900 break-all">
                      {item.value}
                    </p>
                    <span className="text-xs text-[#286181] flex items-center gap-1">
                      Contact <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="container max-w-5xl mx-auto px-4 mt-12">
        <div className="rounded-3xl border border-slate-200 p-10 text-center bg-slate-50">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Sẵn sàng tham gia dự án mới
          </h3>
          <p className="text-slate-500 mb-6">
            Tôi có thể hỗ trợ phân tích nghiệp vụ, viết tài liệu và làm cầu nối giữa business và tech team.
          </p>
          <Link
            href="mailto:ntt.huyen4125354@gmail.com"
            className="px-6 py-3 rounded-xl bg-[#286181] text-white font-bold"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>

      {/* LOCATION */}
      <section className="container max-w-5xl mx-auto px-4 mt-12 text-center">
        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
          <MapPin className="w-4 h-4" />
          Thành phố Hồ Chí Minh, Việt Nam
        </div>
      </section>
    </div>
  );
}