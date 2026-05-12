"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building2,
  Target,
  Sparkles,
} from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group flex flex-col h-full rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-[0_30px_60px_rgba(40,97,129,0.12)] transition-all duration-500 overflow-hidden relative">
        
        {/* ===== HERO IMAGE ===== */}
        {project.heroImage && (
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 backdrop-blur-md text-[#286181] border-none shadow-sm font-bold text-[10px] px-3 py-1">
                {project.type}
              </Badge>
            </div>
          </div>
        )}

        {/* ===== CARD HEADER ===== */}
        <CardHeader className="pt-8 px-8 space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#286181]/60">
            {project.domain || "Business Solution"}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-[#286181] transition-colors duration-300">
            {project.title}
          </h3>
        </CardHeader>

        {/* ===== CARD CONTENT ===== */}
        <CardContent className="flex-1 px-8 pb-6 space-y-5">
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="space-y-3.5 pt-2 border-t border-slate-50">
            {/* CLIENT */}
            {project.context.client && (
              <div className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                <div className="p-1.5 rounded-lg bg-slate-50 text-[#286181] shrink-0">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{project.context.client}</span>
              </div>
            )}

            {/* PROBLEM */}
            {project.context.problem?.[0] && (
              <div className="flex items-start gap-3 text-[13px] text-slate-500">
                <div className="p-1.5 rounded-lg bg-red-50 text-red-500 shrink-0">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span className="line-clamp-2 leading-snug italic">
                  {project.context.problem[0]}
                </span>
              </div>
            )}

            {/* IMPACT (Phần bổ sung) */}
            {project.outcome.impact?.[0] && (
              <div className="flex items-start gap-3 text-[13px] text-slate-700 font-medium">
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="line-clamp-2 leading-snug">
                  {project.outcome.impact[0]}
                </span>
              </div>
            )}
          </div>
        </CardContent>

        {/* ===== TAGS & FOOTER ===== */}
        <div className="px-8 pb-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-bold uppercase tracking-wider bg-slate-50 text-slate-400 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <CardFooter className="p-8 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="
              w-full flex items-center justify-center gap-2 
              bg-[#286181] group-hover:bg-slate-900 
              text-white text-xs font-bold uppercase tracking-widest 
              py-4 rounded-2xl transition-all duration-300 
              shadow-lg shadow-slate-200 group-hover:shadow-[#286181]/20
            "
          >
            Explore Case Study
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}