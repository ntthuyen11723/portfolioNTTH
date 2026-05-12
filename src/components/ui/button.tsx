import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// cva (class-variance-authority), Tool để quản lý class Tailwind theo biến thể, Giúp bạn không phải viết if/else dài dòng
// cva nhận vào một chuỗi class cơ bản và một đối tượng cấu hình cho các biến thể.
// Bạn có thể định nghĩa các biến thể khác nhau (như variant, size) và các giá trị tương ứng của chúng.
// Khi sử dụng, bạn chỉ cần gọi hàm cva với các biến thể mong muốn, và nó sẽ trả về một chuỗi class hoàn chỉnh dựa trên cấu hình đã định nghĩa.
// Điều này giúp mã của bạn sạch sẽ hơn và dễ bảo trì hơn khi làm việc với nhiều biến thể của một component.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:bg-neutral-100 disabled:from-netreul-100 disabled:to-neutral-100 disabled:text-netural-300 border border-neutral-200 shadow-sm [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", // [&_svg] = select tất cả <svg> con
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-700",
        destructive:
          "bg-gradient-to-b from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-700",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-white text-black hover:bg-neutral-100",
        ghost: "border-transparent shadow-none hover:bg-accent hover:text-accent-foreground",
        muted: "bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80",
        teritary: "bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200 shadow-none",
        mine: "hover:text-[#FFF] text-[#64748B]",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md px-3 ",
        lg: "h-12 rounded-md px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

// Cho phép render component như element khác, ví dụ:  <Button asChild> <a href="/home">Go</a> </Button>
export interface ButtonProps // Kế thừa toàn bộ props của <button>: onClick, disabled, type, ...
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// Utility để merge className: cn sẽ giúp bạn kết hợp các className một cách linh hoạt, đặc biệt hữu ích khi bạn có nhiều biến thể và muốn tránh việc viết nhiều điều kiện để thêm class.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
