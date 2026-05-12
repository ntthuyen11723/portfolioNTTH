import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

// LinkedIn Icon
const Linkedin = ({ className }: { className?: string }) => (
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

export function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Journal", href: "/experience" },
        { name: "Projects", href: "/projects" },
        { name: "Achievements", href: "/achievements" },
        // { name: "About", href: "/about" },
    ];

    return (
        <footer className="bg-[#000312] pt-20 pb-10 px-6 border-t border-white/10">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">

                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
                            <div className="w-7 h-7 rounded-full bg-[#f76632] flex items-center justify-center font-black text-[10px] text-[#163300]">
                                TH
                            </div>
                            <span className="font-black text-sm tracking-tight text-white uppercase">
                                HUYEN NGUYEN THI THU
                            </span>
                        </Link>
                        <p className="text-[#868685] text-sm leading-relaxed max-w-sm mb-8">
                            Business Analyst with a solid foundation in transforming complex business requirements into systematic technical solutions. Specialized in Process Modeling and Digital Product Design throughout the Software Development Life Cycle (SDLC)
                        </p>
                        <div className="flex gap-4">
                            <Link href="/https://www.linkedin.com/in/huyen-ntt/" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#d74916] hover:text-[#163300] transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="mailto:ntt.huyen4125354@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#d74916] hover:text-[#163300] transition-all">
                                <Mail className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="md:col-span-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#454745] mb-6">
                            Navigation
                        </p>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#868685] text-sm font-semibold hover:text-[#d74916] transition-colors flex items-center group"
                                    >
                                        {link.name}
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#454745] mb-6">
                            Get in Touch
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-[#d74916]"><Mail className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-[10px] text-[#454745] uppercase font-bold mb-1">Email</p>
                                    <p className="text-white text-sm font-medium">ntt.huyen4125354@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-[#d74916]"><Phone className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-[10px] text-[#454745] uppercase font-bold mb-1">Phone</p>
                                    <p className="text-white text-sm font-medium">(+84) 333 943 170</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-[#d74916]"><MapPin className="w-4 h-4" /></div>
                                <div>
                                    <p className="text-[10px] text-[#454745] uppercase font-bold mb-1">Location</p>
                                    <p className="text-white text-sm font-medium">Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[11px] text-[#454745] font-medium">
                        © {currentYear} Huyen Nguyen Thi Thu. Built with Next.js 15 & Tailwind CSS.
                    </p>
                    {/* <div className="flex gap-6">
                        <Link href="/privacy" className="text-[11px] text-[#454745] hover:text-[#868685]">Privacy Policy</Link>
                        <Link href="/terms" className="text-[11px] text-[#454745] hover:text-[#868685]">Terms of Service</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}