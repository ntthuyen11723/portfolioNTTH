"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FileDown,
  Menu,
  Sprout,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Journal", href: "/experience-skills" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[#e6f4f9] bg-[#000312] backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f5f5] text-orange-500 transition-transform group-hover:rotate-12">
            <Sprout className="h-6 w-6 " />
          </div>
          <span className="text-xl font-bold tracking-tighter text-orange-500">
            HUYEN<span className="text-[#ffffff]">.BA</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-bold tracking-tight transition-all rounded-lg",
                  isActive
                    ? "text-[#D74916] bg-[#fff]" // Trạng thái Active: Cố định màu cam, nền trắng (không có hiệu ứng hover)
                    : "text-[#64748B] hover:text-[#fff]" // Trạng thái Inactive: Mặc định xám, hover chuyển sang trắng
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="text-[#ffffff] font-bold hover:text-[#ffffff] hover:bg-[#d74916c4] border border-[#6f1e00] bg-[#d74b16] transition-colors"
          >
            {/* Tên file khớp với Resume của bạn */}
            <a href="/RESUMÉ_JUNIOR BUSINESS ANALYST_ NGUYEN_THI_THU_HUYEN.pdf" download>
              <FileDown className="mr-2 h-4 w-4 " />
              CV
            </a>
          </Button>
          {/* <div className="h-4 w-px bg-[#000312] mx-1" /> */}
          {/* <Button asChild className="bg-[#286181] hover:bg-[#1a4158] rounded-xl font-bold px-6 shadow-md shadow-blue-900/10">
            <Link href="/contact">Hire Me</Link>
          </Button> */}
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-orange-500 hover:bg-[#e6f4f9]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 border-l border-slate-100">
              <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                  <span className="font-bold text-[#286181] text-lg italic underline decoration-2">Menu Navigation</span>
                </div>
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex w-full items-center px-6 py-4 text-lg font-bold transition-all rounded-2xl mb-2",
                        pathname === item.href
                          ? "bg-[#e6f4f9] text-[#286181] translate-x-2"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="p-6 border-t border-slate-50">
                  <Button asChild className="w-full bg-[#286181] h-14 rounded-2xl text-base font-bold shadow-lg">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}