"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/features/projects/constants";
import { ProjectCard } from "@/features/projects/components/project-card";
import { Rocket, ArrowRight, FileDown, Sparkles, ChevronRight, FileSearch, Brain, GitBranch, Layout, CheckCircle, Users, ShieldCheck, CircleCheckBig,Form } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Animation Variants mẫu
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GROWTH_JOURNEY = [
  {
    year: "2022 - 2026",
    title: "MIS Foundation",
    desc: "Nền tảng hệ thống thông tin & tư duy phân tích.",
  },
  {
    year: "Early 2025",
    title: "Research &\nInternship IT BA",
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

function Counter({
  value,
  suffix = "",
  isSpecial = false
}: {
  value: number;
  suffix?: string;
  isSpecial?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const numericValue = Number(latest.toFixed(0));
        ref.current.textContent = Intl.NumberFormat("en-US").format(numericValue);
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span ref={ref} className="text-3xl md:text-5xl font-bold text-[#00072D] tabular-nums">
        0
      </span>
      {suffix && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className={`text-[#00072D] font-bold leading-none ${isSpecial ? "text-xl md:text-2xl mt-1" : "text-3xl md:text-5xl"}`}
        >
          {suffix}
        </motion.span>
      )}
    </div>
  );
}

export default function HomePage() {
  const totalBpmn = PROJECTS.reduce((acc, p) => acc + (p.metrics?.bpmn || 0), 0);
  const totalScreens = PROJECTS.reduce((acc, p) => acc + (p.metrics?.screens || 0), 0);

  const stats = [
    { value: PROJECTS.length, suffix: "+", label: "Projects" },
    { value: totalBpmn, suffix: "+", label: "Modelling BPMN" },
    { value: totalScreens, suffix: "+", label: "Prototypes UI/UX" },
    { value: 1, suffix: "", label: "Scopus Research", isSpecial: true },
  ];

  return (
    <div className="flex flex-col gap-0 bg-white overflow-x-hidden w-full relative">

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Cột trái: Nội dung - Thay đổi căn lề linh hoạt */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 md:mb-6 leading-tight"
              >
                <span className="text-[#00072D]">BUSINESS ANALYST</span>
              </motion.h1>

              <motion.div initial="initial" animate="animate" variants={fadeInUp}>
                {/* Giảm border xuống mức hợp lý hơn (ví dụ 2px hoặc dùng shadow thay thế) */}
                <Badge className="mb-6 md:mb-8 bg-white text-[#00072D] hover:bg-[#e6f4f9] text-sm md:text-base border-2 rounded-2xl border-[#e6f4f9] px-4 py-1 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                  Every limit starts as an unverified assumption
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-slate-500 max-w-xl mb-8 md:mb-10 text-center md:text-justify"
              >
                {/* Phần Lời chào */}
                <div className="mb-4 md:mb-6">
                  <span className="block text-[#D74B16] text-lg md:text-2xl font-bold mb-1">
                    Hello!
                  </span>
                  <span className="block text-[#0f172a] text-xl md:text-2xl font-bold">
                    I'm Huyen Nguyen Thi Thu,
                  </span>
                </div>

                <div className="text-[0.95rem] md:text-[1rem] leading-relaxed space-y-4">
                  <p>
                    With nearly one year of experience across{" "}
                    <span className="text-[#d45f34] font-bold">
                      ERP-Enterprise Resource Planning, Digital Government & Public Sector, Transportation Technology, and Inventory & Warranty Management
                    </span>
                    , I specialize in analyzing requirements and clarifying business problems.
                    I deliver feasible, technology-driven solutions that resolve operational pain points.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Cột phải: Hình ảnh - Ưu tiên hiển thị trước trên mobile hoặc thu nhỏ lại */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-[280px] md:w-full max-w-full md:max-w-none mx-auto aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#e6f4f9] order-1 md:order-2"
            >
              <Image
                src="/me.png"
                alt="Nguyễn Thị Thu Huyền"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="container max-w-6xl mx-auto px-4 pt-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-[#00072D]/20 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-4 md:p-12 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors relative overflow-hidden"
            >
              <div className="mb-2 relative z-10">
                {item.isSpecial ? (
                  <Counter value={item.value} suffix={item.suffix} isSpecial={true} />
                ) : (
                  <div className="flex items-baseline justify-center gap-1">
                    <Counter value={item.value} />
                    <span className="text-3xl md:text-5xl font-bold text-[#00072D]">{item.suffix}</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] text-center relative z-10">
                {item.label}
              </span>
              <motion.div
                className="absolute inset-0 bg-[#ecfcf8] opacity-0 group-hover:opacity-100 transition-opacity -z-0"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="container max-w-6xl mx-auto px-4 pt-14">
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            <div className="h-1.5 w-12 bg-[#00072D] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
            <p className="text-[#D74B16] max-w-md font-bold">From Needs to Solutions</p>
          </motion.div>
          <Link href="/projects" className="group hidden md:flex items-center gap-1 text-sm font-bold text-[#D74B16]">
            VIEW ALL PROJECTS
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. IMPACT & RESULTS */}
      <section className="container max-w-6xl mx-auto px-4 pt-14 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[#f8fafc] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00072D]/10 blur-[120px] -z-10" />

        <div className="container max-w-6xl  px-4"> {/* Loại bỏ space-y-16 ở đây để kiểm soát khoảng cách thủ công */}

          {/* HEADER */}
          <div className="text-left space-y-4 max-w-3xl pb-8">
            <div className="h-1.5 w-12 bg-[#00072D] rounded-full" />

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Impact & Results
            </h2>

            <p className="text-[#D74B16] leading-relaxed font-medium">
              Analyzing, designing, and collaborating with teams to deliver tangible value.
            </p>
          </div>

          {/* VALUE CARDS - Đã thêm mt-[10pt] để tạo khoảng cách chính xác 10pt */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clear Requirements",
                desc: "Authored 240+ user stories with structured acceptance criteria across 3 projects; only ~10% required clarification with dev/QA, reducing requirement ambiguity at sprint kickoff",
                icon: FileSearch,
              },
              {
                title: "Structured Processes",
                desc: "Modeled 17 BPMN workflows across 3 projects (Smart Check & Track, DVX247, Public Sector), standardizing business logic as shared reference for dev, QA, and PM",
                icon: GitBranch,
              },
              {
                title: "Better UX Decisions",
                desc: "Delivered 141 UI/UX mockups in Figma; trained 20 end-users on Smart Check & Track with zero post-launch usability tickets-only infrastructure-level issues reported",
                icon: Layout,
              },
              {
                title: "Stakeholder Alignment",
                desc: "Bridged business and technical teams across 3 projects, facilitating sprint-level collaboration with near-zero ad-hoc clarification meetings required during implementation",
                icon: Users,
              },
              {
                title: "Faster Delivery",
                desc: "Minimized rework cycles with only ~10% user story clarification rate and 12 total change requests from requirement gaps across 3 projects, enabling development teams to focus on building rather than re-clarifying",
                icon: Rocket,
              },
              {
                title: "Risk Reduction",
                desc: "Maintained low requirement-volatility across 3 projects: only 12 change requests originated from unclear requirements (~5% of 240 user stories), allowing development teams to maintain stable sprint scope",
                icon: ShieldCheck,
              },
            ].map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-[2rem]
            bg-white border border-[#dedddd]
            shadow-lg shadow-[#FFFFFF]
            hover:bg-[rgba(238,235,235,0.28)]
            hover:-translate-y-2
            hover:border-[#d7491678]
            transition-all duration-500 flex flex-col"
                >

                  {/* Icon Section */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6
             bg-[#ffffff] border border-[#d749166c] shadow-sm
             transition-all duration-300
             group-hover:bg-[#ffffff] group-hover:border-[#00072D]">
                    <Icon className="w-6 h-6 text-[#00072D] transition-colors group-hover:text-[#00072D]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#00072D] text-lg mb-3 group-hover:text-[#d74b16] transition-colors">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-1 bg-[#00072D]/20 rounded-full mb-4 group-hover:w-12 group-hover:bg-[#00072d] transition-all" />

                  {/* Description */}
                  <p className="text-sm text-slate-500 group-hover:text-[#00072D]  leading-relaxed font-medium flex-1">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* FOOTNOTE */}
          {/* <p className="text-center text-sm text-slate-400 max-w-2xl mx-auto pt-6">
            Không chỉ dừng lại ở tài liệu, tôi tập trung vào việc đảm bảo mọi phân tích đều
            tạo ra giá trị thực tế cho sản phẩm và người dùng cuối.
          </p> */}

        </div>
      </section>

        {/* ===== 5. GROWTH JOURNEY ===== */}
        <section className="container max-w-6xl pt-14 pb-10 mx-auto border-t border-slate-100 overflow-hidden">
          <div className="flex flex-col items-center text-center mb-14 space-y-3">
            <div className="h-1.5 w-12 bg-[#00072D] rounded-full" />
            
            <h2 className="text-3xl md:text -4xl font-bold text-slate-900 tracking-tight">
              Growth Journey
            </h2>

            {/* <p className="text-slate-500 font-medium text-sm">
              Từ nền tảng đến thực chiến Business Analysis.
            </p> */}
          </div>

          <div className="relative">
            {/* LINE */}
            <div className="absolute top-[7px] left-4 right-[-100px] h-[2px] 
              bg-gradient-to-r from-[#00072D] via-[#00072D]/40 to-transparent 
              hidden md:block z-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
              
              {GROWTH_JOURNEY.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group pr-4 pb-6"
                >
                  {/* Node */}
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#00072D] mb-5 
                    transition-all duration-300 
                    group-hover:bg-[#00072D] 
                    group-hover:scale-150"
                  />

                  {/* Content */}
                  <div className="space-y-1">
                    <div className="text-[13px] font-bold text-[#D74B16] uppercase tracking-[0.2em]">
                      {item.year}
                    </div>

                    <div className="text-[14px] font-bold text-slate-900 group-hover:text-[#00072D] transition-colors whitespace-pre-line">
                      {item.title}
                    </div>

                    {/* <div className="text-[12px] text-slate-500 font-medium leading-snug">
                      {item.desc}
                    </div> */}
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
                <div className="w-4 h-4 rounded-full bg-[#00072D] border-2 border-white shadow-[0_0_0_4px_rgba(40,97,129,0.15)] mb-5 
                  group-hover:scale-125 transition-all duration-300 relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#00072D] blur-md opacity-40 animate-pulse" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-[14px] font-bold text-[#D74B16] uppercase tracking-[0.2em]">
                    Future
                  </div>

                  <div className="text-[15px] font-bold text-slate-900 group-hover:text-[#00072D] transition-colors">
                    Senior BA Path
                  </div>
{/* 
                  <div className="text-[13px] text-slate-600 font-medium leading-snug max-w-[200px]">
                    Phát triển System Thinking và Solution Design để dẫn dắt sản phẩm.
                  </div> */}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      {/* 6. CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto mb-20"
      >
        <div className="relative rounded-[2.5rem] bg-[#00072D] p-10 md:p-12 lg:px-14 overflow-hidden">

          {/* Background Decorations */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full"
          />
          <div
            className="absolute -bottom-1 -left-20 w-60 h-60 border border-white/10 rounded-full"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center px-10">

            {/* Cột trái: Hình ảnh (Đã thu nhỏ bằng rem và áp dụng tỷ lệ 14:25) */}
            {/* max-w-[14rem] giữ cho hình ảnh nhỏ gọn trên mobile, căn giữa bằng mx-auto */}
            <div className="relative w-full max-w-[12rem] md:max-w-[14rem] mx-auto md:mx-0 aspect-[14/25] rounded-[2rem] overflow-hidden shadow-2xl padding-left-4">
              <Image
                src="/memories2.png"
                alt="Memories"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 14rem, 18rem"
              />
            </div>

            {/* Cột phải: Nội dung văn bản (Căn phải) */}
            <div className="flex flex-col col-span-2 items-end text-right">

              {/* Tiêu đề: Set cứng size 26px trên mobile, có thể to hơn trên desktop nếu muốn (md:text-4xl) */}
              <h2 className="text-[26px] md:text-2xl lg:text-[30px] font-bold text-white mb-6 leading-[1]">
                Ready to partner with you <br className="hidden xl:block" /> on future initiatives
              </h2>

              {/* Đoạn mô tả: Set cứng size 12px trên mobile */}
              <p className="text-white/70 text-[12px] md:text-lg mb-10 ml-auto leading-relaxed">
                I am eager to pursue career opportunities where I can make a meaningful impact through technology solutions that truly meet user needs.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-[#00072D] font-bold rounded-xl px-10 h-14 shadow-2xl transition-colors">
                  <Link href="mailto:ntt.huyen4125354@gmail.com">
                    Contact me now !
                  </Link>
                </Button>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>
    </div>
  );
}