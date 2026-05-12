import {cn} from "@/lib/utils";


// Định nghĩa kiểu props cho DottedSeparator
interface DottedSeparatorProps {
    className?: string;                          // Cho phép truyền className tùy chỉnh
    color?: string;                              // Màu sắc của chấm, mặc định là màu xám nhạt
    height?: string;                             // Chiều cao của đường kẻ, mặc định là 2px
    dotSize?: string;                            // Kích thước của chấm, mặc định là 2px
    gapSize?: string;                            // Khoảng cách giữa các chấm, mặc định là 6px
    direction?: "horizontal" | "vertical";       // Hướng của đường kẻ, mặc định là ngang
}

// Khai báo component DottedSeparator
export const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotSize = "2px",
    gapSize = "6px",
    direction = "horizontal",
}: DottedSeparatorProps) => {
    const isHorizontal = direction === "horizontal";

    return (
        <div className={cn(
            isHorizontal ? "w-full flex items-center" : "h-full flex flex-col items-center",    // Đặt flex-direction dựa trên hướng
            className,
        )}>
            <div className={isHorizontal ? "flex-grow" : "flex-grow-0"}        // nếu là horizontal thì flex-grow để chiếm hết chiều ngang, nếu vertical thì to prevent a flex item from growing
            style={{
                width: isHorizontal ? "100%" : height,     // Chiều rộng của đường kẻ, nếu là horizontal thì chiếm hết chiều ngang, nếu vertical thì bằng biến height (chiều cao khai báo)
                height: isHorizontal ? height : "100%",
                backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,       // Tạo pattern chấm bằng radial-gradient
                // Mỗi “ô” pattern gồm: dot + gap
                backgroundSize: isHorizontal ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}` : `${height}px ${parseInt(dotSize) + parseInt(gapSize)}px`,
                // Lặp lại pattern theo chiều ngang hoặc dọc
                backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
                backgroundPosition: "center",
            }}
            />
        </div>
    )
};