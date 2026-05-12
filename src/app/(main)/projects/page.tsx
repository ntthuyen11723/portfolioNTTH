import { PROJECTS } from "@/features/projects/constants";
import { ProjectCard } from "@/features/projects/components/project-card";


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. ARCHIVE HEADER - Minimalist & Bold */}
      <section className="relative pt-20 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-10 bg-[#286181] rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Portfolio Archive
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Hành trình <br />
              <span className="text-[#286181]">Phân tích & Giải pháp</span>
            </h1>
            
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Từ việc khơi gợi yêu cầu (Elicitation) đến hiện thực hóa thành các Artifacts (SRS, BPMN, UI Mockups). 
              Đây là tập hợp các Case Study thực tế tôi đã thực hiện tại HONEYNET và SPT.
            </p>
          </div>
        </div>
      </section>

    {/* 2. PROJECT LIST SECTION */}
    <section className="bg-slate-50/50 py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Real Information Header - Thay thế cho Virtual Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200/60 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {/* Một chút chi tiết nhỏ giúp UI nhìn "xịn" hơn */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-[#286181]/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#286181]">0{i}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-900">
              Hiển thị tất cả <span className="text-[#286181]">{PROJECTS.length} dự án</span> tiêu biểu
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5dcaa5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5dcaa5]"></span>
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Cập nhật: Tháng 4, 2026
            </span>
          </div>
        </div>

        {/* Grid System - Giữ nguyên logic hiển thị hết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.slug}
              className="animate-in fade-in slide-in-from-bottom-12 fill-mode-both duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full max-w-lg mb-8" />
          <p className="text-sm text-slate-400 font-medium">
            Bạn muốn tìm hiểu sâu hơn về một quy trình cụ thể? <br className="hidden md:block" /> 
            Hãy nhấn vào từng dự án để xem tài liệu chi tiết.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}