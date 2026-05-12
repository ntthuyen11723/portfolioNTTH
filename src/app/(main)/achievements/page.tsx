"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  BookOpenCheck,
  GraduationCap,
  ExternalLink,
  X,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Định nghĩa hiệu ứng Bottom-to-Top dùng chung
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const ACHIEVEMENTS = [
  {
    type: "Research",
    title:
      "GenAI in Higher Education: A Review of Student Adoption and A Future Research Agenda",
    org: "Scopus Indexed Publication",
    impact: "Published international paper (Scopus)",
    description:
      "\"The research compares Generative AI acceptance between STEM and Non-STEM students at Van Lang University using an extended UTAUT2 model. The findings affirm AI Literacy as a core antecedent driving behavioral intention. Notably, STEM students exhibit a significantly stronger habituation toward these tools.\"",
    icon: BookOpenCheck,
    year: "2025",
    images: ["/nckh-2.jpg", "/nckh-1.jpg"],
    link: "https://ieeexplore.ieee.org/document/11360117",
  },
  {
    type: "Competition",
    title: "Top 21 Startup Projects - Trustify CRS",
    org: "Ra Khoi 2025 - Switch On Sustainability",
    impact: "A Blockchain-based Solution for Transparent Charitable Operations",
    description:
      "\"The Trustify CSR project leverages Blockchain technology to institutionalize financial transparency within charitable activities. This platform facilitates a seamless connection between donors and social welfare programs, with a strategic focus on enhancing educational infrastructure in the Central Highlands. By ensuring data immutability and automating processes via smart contracts, the system aims to restore public trust in the philanthropic ecosystem.\"",
    icon: Trophy,
    year: "2025",
    images: ["/memories-1.png", "/memories-3.png"],
    link: "https://trustify-csr.vercel.app/?fbclid=IwY2xjawRMSRFleHRuA2FlbQIxMABicmlkETFKR0JacFlZSVNpSnkyWkRLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsHqxu4WWsRFG6Wbk_YB0kX5tZ2jNOfwjgUpNjY3NhsWfnfUzGHNyjDVVI0u_aem_5HmV9yM2dj39iLTwRiuSPQ",
  },
];

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pb-16 overflow-x-hidden">
      {/* HEADER */}
      <section className="pt-20 animate-in fade-in slide-in-from-left-8 duration-1000">
        <div className="container max-w-5xl mx-auto px-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-10 bg-[#00072d] rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#d74a16]">
              Awards <span className="text-[#00072a]">& </span>
              <span className="text-[#d74a16]">Research</span>
            </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container max-w-5xl mx-auto px-4 pt-16 space-y-12">
        {ACHIEVEMENTS.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              {...fadeInUp}
              // Thêm delay nhẹ cho từng thẻ để tạo hiệu ứng cascade (thác đổ)
              transition={{delay: index * 0.1 }}
            >
              <Card className="border border-slate-300 rounded-2xl hover:border-[#00072A]/80 hover:shadow-lg transition-all overflow-hidden">
                <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                  {/* LEFT META */}
                  <div className="md:w-40 flex md:flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-[#00072A]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#00072A]" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-400 font-bold tracking-wider">
                          {item.year}
                        </span>
                        <Badge className="bg-slate-100 text-slate-500 border-none text-[10px] font-bold uppercase w-fit">
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#00072A] font-semibold mt-1">
                        {item.org}
                      </p>
                    </div>

                    {/* IMPACT BOX AS A LINK */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#00072A] border border-[#F5F5F5] text-sm font-medium text-[#FFF] hover:bg-[#00072A]/90 hover:text-[#ff9f7d] transition-all group"
                    >
                      <span className="pr-4">{item.impact}</span>
                      <ExternalLink className="w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>

                    <p className="text-slate-500 text-sm leading-relaxed text-justify italic">
                      {item.description}
                    </p>

                    {/* HIỂN THỊ HÌNH ẢNH */}
                    {item.images && item.images.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        {item.images.map((imgSrc, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="relative w-full sm:w-48 h-32 rounded-xl overflow-hidden border border-slate-200 shadow-sm cursor-zoom-in group"
                            onClick={() => setSelectedImage(imgSrc)}
                          >
                            <Image
                              src={imgSrc}
                              alt={`${item.title} - Image ${idx + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}

        {/* CERTIFICATES */}
        <motion.div 
          className="border-t border-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-[20px] font-bold text-[#d74a16] uppercase tracking-[0.4em] mb-10 text-center">
            Certificates
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "English Aptis ESOL",
              "MOS Word",
              "MOS Excel",
              "MOS PowerPoint",
            ].map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-[#00072a28] bg-white hover:border-[#00072A]/70 hover:shadow-md transition-all text-center flex flex-col items-center"
              >
                <GraduationCap className="w-5 h-5 text-slate-400 mb-2" />
                <div className="text-sm font-semibold text-slate-800">
                  {cert}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* POPUP / LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl h-full max-h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged Image"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}