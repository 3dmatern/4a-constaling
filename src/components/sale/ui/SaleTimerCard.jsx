import { cn } from "../../../../lib/utils";

export const SaleTimerCard = ({ className, children }) => {
    return (
        <div
            className={cn(
                "flex items-start justify-center gap-1 text-teal-main",
                className
            )}
        >
            {children}
        </div>
    );
};

SaleTimerCard.Count = function SaleTimerCardCount({ count, description }) {
    return (
        <div className="size-16 flex flex-col items-center justify-center gap-0">
            <p
                className={`
                                font-['Bebas_Neue'] font-normal text-[40px] leading-[41.2px]
                            `}
            >
                {count}
            </p>
            <p className="text-sm leading-[18.2px] text-gray-main">
                {description}
            </p>
        </div>
    );
};

SaleTimerCard.Divider = function SaleTimerCardDivider({ className }) {
    return (
        <div className={cn("pt-[18px] flex flex-col gap-1.5", className)}>
            <ElipseImage />
            <ElipseImage />
        </div>
    );
};

const ElipseImage = ({ className }) => {
    return (
        <svg
            className={className}
            width="5"
            height="4"
            viewBox="0 0 5 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="2.5" cy="2" r="2" fill="currentColor" />
        </svg>
    );
};
