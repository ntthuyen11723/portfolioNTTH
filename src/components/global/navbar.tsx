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
        <a href="/" className="font-bold text-xl tracking-tighter">
          HUYEN.BA
        </a>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <Button asChild variant="primary" size="sm">
          <a href="/contact">Liên hệ</a>
        </Button>
      </div>
    </nav>
  );
}