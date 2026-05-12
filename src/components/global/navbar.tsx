import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Về tôi", href: "/about" },
  { label: "Kinh nghiệm", href: "/experience" },
  { label: "Dự án", href: "/projects" },
  { label: "Kỹ năng", href: "/skills" },
  { label: "Thành tựu", href: "/achievements" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter">
          HUYEN.BA
        </Link>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <Button asChild variant="primary" size="sm">
          <Link href="/contact">Liên hệ</Link>
        </Button>
      </div>
    </nav>
  );
}