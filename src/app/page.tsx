"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/features/projects/constants";
import { ProjectCard } from "@/features/projects/components/project-card";
import { Rocket, ArrowRight, FileDown, Sparkles, ChevronRight, FileSearch, Brain, GitBranch, Layout, CheckCircle, Users, ShieldCheck } from "lucide-react";
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

const steps = [
  {
    title: "Requirement Gathering",
    desc: "Thu thập yêu cầu từ stakeholders và xác định business goals.",
    icon: FileSearch,
  },
  {
    title: "Analysis",
    desc: "Phân tích vấn đề, xác định scope và các edge cases.",
    icon: Brain,
  },
  {
    title: "Process Modeling",
    desc: "Xây dựng BPMN, Use Case để mô hình hóa luồng nghiệp vụ.",
    icon: GitBranch,
  },
  {
    title: "Solution Design",
    desc: "Thiết kế UI/UX và viết tài liệu SRS rõ ràng cho dev.",
    icon: Layout,
  },
  {
    title: "Validation & Delivery",
    desc: "Review với stakeholders và hỗ trợ team triển khai.",
    icon: CheckCircle,
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
      <span ref={ref} className="text-3xl md:text-5xl font-bold text-[#286181] tabular-nums">
        0
      </span>
      {suffix && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className={`text-[#286181] font-bold leading-none ${isSpecial ? "text-xl md:text-2xl mt-1" : "text-3xl md:text-5xl"}`}
        >
          {suffix}
        </motion.span>
      )}
    </div>
  );
}

export default function HomePage() {
  // Đã xóa bỏ các thẻ [cite] gây lỗi ở đây
  const totalBpmn = PROJECTS.reduce((acc, p) => acc + (p.metrics?.bpmn || 0), 0); 
  const totalScreens = PROJECTS.reduce((acc, p) => acc + (p.metrics?.screens || 0), 0); 

  const stats = [
    { value: PROJECTS.length, suffix: "+", label: "Dự án hoàn thành" },
    { value: totalBpmn, suffix: "+", label: "Quy trình BPMN" },
    { value: totalScreens, suffix: "+", label: "Màn hình UI/UX" },
    { value: 1, suffix: "Scopus", label: "Công bố quốc tế", isSpecial: true },
  ];

  return (
    <div className="flex flex-col gap-0 pb-20 bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 -left-20 w-96 h-96 bg-[#e6f4f9] rounded-full blur-[100px] -z-10" 
        />
        
        <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Badge className="mb-6 bg-[#e6f4f9] text-[#286181] hover:bg-[#e6f4f9] border-none px-4 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Junior Business Analyst
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 max-w-5xl leading-[1.2] mx-auto"
          >
            Chuyển đổi nghiệp vụ <span className="whitespace-nowrap">thành</span> <br className="hidden md:block" />
            <motion.span 
              initial={{ color: "#0f172a" }}
              animate={{ color: "#286181" }}
              transition={{ delay: 1, duration: 1 }}
            >
              Giá trị kỹ thuật số
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed"
          >
            Tôi là <span className="text-slate-900 font-medium">Nguyễn Thị Thu Huyền</span>.
            Kết nối khoảng cách giữa nhu cầu kinh doanh và giải pháp công nghệ thông qua tư duy phân tích sắc bén.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button asChild size="lg" className="bg-[#286181] hover:bg-[#1a4158] rounded-xl px-10 h-14 transition-all active:scale-95 shadow-xl shadow-blue-900/20">
              <Link href="/projects">
                Xem Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="rounded-xl h-14 px-8 text-slate-600 hover:bg-[#e6f4f9]" asChild>
              <a href="/RESUME_JUNIOR_BA_NGUYEN_THI_THU_HUYEN.pdf" download>
                <FileDown className="mr-2 w-4 h-4" /> Tải CV cá nhân
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="container max-w-6xl mx-auto px-4 pt-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-8 md:p-12 flex flex-col items-center justify-center group hover:bg-slate-50 transition-colors relative overflow-hidden"
            >
              <div className="mb-2 relative z-10">
                {item.isSpecial ? (
                  <Counter value={item.value} suffix={item.suffix} isSpecial={true} />
                ) : (
                  <div className="flex items-baseline justify-center gap-1">
                    <Counter value={item.value} />
                    <span className="text-3xl md:text-5xl font-bold text-[#286181]">{item.suffix}</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] text-center relative z-10">
                {item.label}
              </span>
              <motion.div
                className="absolute inset-0 bg-[#e6f4f9] opacity-0 group-hover:opacity-100 transition-opacity -z-0"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="container max-w-6xl mx-auto px-4 pt-8">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            <div className="h-1.5 w-12 bg-[#286181] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Dự án tiêu biểu</h2>
            <p className="text-slate-500 max-w-md">Tổng hợp giải pháp từ phân tích yêu cầu đến thiết kế Mockup chi tiết.</p>
          </motion.div>
          <Link href="/projects" className="group hidden md:flex items-center gap-1 text-sm font-bold text-[#286181]">
            TẤT CẢ DỰ ÁN
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

    {/* 4. BA PROCESS - OPTIMIZED VERSION */}
    <section className="py-8 container max-w-6xl mx-auto px-4">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          className="h-1.5 bg-[#286181] mx-auto rounded-full" 
        />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          BA Lifecycle
        </h2>
      </div>

      <div className="relative">
        {/* 1. ĐƯỜNG NỐI: Đậm hơn và có màu sắc gradient để bớt đơn điệu */}
        <div className="hidden md:block absolute top-[45px] left-[5%] right-[5%] h-[3px] bg-gradient-to-r from-blue-100 via-[#286181]/40 to-blue-100 z-0" />

        {/* 2. CẤU TRÚC CARD: Sử dụng flex và min-h để đảm bảo bằng nhau */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col h-full group" // h-full để kéo dài toàn bộ cột
              >
                {/* ICON & NUMBER */}
                <div className="relative mb-8 flex justify-center shrink-0">
                  <div className="w-[86px] h-[86px] rounded-[2rem] bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center group-hover:border-[#286181] group-hover:shadow-[#286181]/20 transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#286181]" />
                  </div>
                  <div className="absolute -bottom-2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-white shadow-sm">
                    0{index + 1}
                  </div>
                </div>

                {/* 3. NỘI DUNG: Sử dụng bg-gradient và flex-1 để tự động căn đều chiều cao */}
                <div className="flex-1 flex flex-col p-6 rounded-[2rem] bg-gradient-to-b from-white to-slate-50 border border-slate-100 group-hover:border-[#286181]/30 group-hover:to-blue-50/30 transition-all duration-500">
                  <h3 className="font-bold text-slate-900 text-[15px] md:text-base mb-3 leading-tight min-h-[40px] flex items-center justify-center text-center group-hover:text-[#286181]">
                    {step.title}
                  </h3>
                  
                  {/* Divider nhỏ màu sắc */}
                  <div className="w-6 h-1 bg-[#286181]/20 rounded-full mx-auto mb-4 group-hover:w-12 group-hover:bg-[#286181] transition-all" />
                  
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

    {/* 5. IMPACT & RESULTS */}
    <section className="relative py-16 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#f8fafc] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#286181]/10 blur-[120px] -z-10" />

      <div className="container max-w-6xl mx-auto px-4 space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-1.5 w-12 bg-[#286181] mx-auto rounded-full" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Impact & Results
          </h2>

          <p className="text-slate-500 leading-relaxed font-medium">
            Những giá trị thực tế tôi mang lại thông qua việc phân tích,
            thiết kế và đồng hành cùng đội phát triển.
          </p>
        </div>

        {/* VALUE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Clear Requirements",
              desc: "Giảm ambiguity trong yêu cầu, giúp dev hiểu đúng ngay từ đầu và hạn chế rework.",
              icon: FileSearch,
            },
            {
              title: "Structured Processes",
              desc: "Chuẩn hóa quy trình nghiệp vụ bằng BPMN giúp team align nhanh và dễ mở rộng hệ thống.",
              icon: GitBranch,
            },
            {
              title: "Better UX Decisions",
              desc: "Thiết kế UI/UX dựa trên logic nghiệp vụ giúp sản phẩm dễ dùng và đúng nhu cầu thực tế.",
              icon: Layout,
            },
            {
              title: "Stakeholder Alignment",
              desc: "Kết nối business và technical team, đảm bảo tất cả các bên hiểu cùng một mục tiêu.",
              icon: Users,
            },
            {
              title: "Faster Delivery",
              desc: "Giảm thời gian trao đổi và sửa đổi nhờ tài liệu rõ ràng và flow được chuẩn hóa.",
              icon: Rocket,
            },
            {
              title: "Risk Reduction",
              desc: "Phát hiện sớm vấn đề trong requirement giúp giảm thiểu rủi ro trong quá trình phát triển.",
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
                          bg-white border border-slate-100
                          shadow-lg shadow-slate-200/50
                          hover:shadow-[0_20px_50px_rgba(40,97,129,0.15)]
                          hover:-translate-y-2
                          hover:border-[#286181]/30
                          transition-all duration-500 flex flex-col"
              >
                {/* Accent top line */}
                {/* Accent top line (respect border radius) */}
<div className="absolute inset-0 rounded-[2rem] pointer-events-none">
  <div className="absolute top-0 left-0 w-full h-20 
                  bg-gradient-to-b from-[#286181]/10 to-transparent 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 rounded-t-[2rem]" />
</div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#286181]/10 flex items-center justify-center mb-6
                                group-hover:bg-[#286181] transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 text-[#286181] group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-[#286181] transition-colors">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-1 bg-[#286181]/20 rounded-full mb-4 group-hover:w-12 group-hover:bg-[#286181] transition-all" />

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed font-medium flex-1">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <p className="text-center text-sm text-slate-400 max-w-2xl mx-auto pt-6">
          Không chỉ dừng lại ở tài liệu, tôi tập trung vào việc đảm bảo mọi phân tích đều
          tạo ra giá trị thực tế cho sản phẩm và người dùng cuối.
        </p>

      </div>
    </section>
      {/* 6. CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto px-4 mb-20"
      >
        <div className="relative rounded-[2.5rem] bg-[#286181] p-8 md:p-20 overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full" 
          />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Sẵn sàng đồng hành cùng <br /> dự án tiếp theo của bạn.
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl">
              Tôi luôn tìm kiếm cơ hội để áp dụng kỹ năng phân tích BA vào các sản phẩm thực tế. Hãy cùng tạo nên sự khác biệt.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-white hover:bg-white text-[#1a4158] font-bold rounded-xl px-10 h-14 shadow-2xl">
                <Link href="/contact">Bắt đầu thảo luận</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}