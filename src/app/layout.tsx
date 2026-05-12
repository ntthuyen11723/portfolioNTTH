// global import
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// alias imports
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar"; // Đảm bảo đường dẫn này đúng với vị trí file navbar của bạn

// relative imports
import "./globals.css";

export const metadata: Metadata = {
  title: "Huyen.BA | Portfolio",
  description: "Portfolio of Nguyen Thi Thu Huyen - Junior Business Analyst",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased min-h-screen flex flex-col bg-white"
        )}
      >
        {/* Navbar xuất hiện ở trên cùng của mọi trang */}
        <Navbar />

        {/* flex-1 giúp phần main chiếm toàn bộ không gian còn lại,
          đẩy Footer (nếu có) xuống dưới cùng trang
        */}
        <main className="flex-1">
          {children}
        </main>

        {/* Bạn có thể thêm <Footer /> ở đây sau này */}
      </body>
    </html>
  );
}