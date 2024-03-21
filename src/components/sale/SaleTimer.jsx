import { cn } from "../../../lib/utils";

export const SaleTimer = ({ className, children }) => {
    return (
        <div
            className={cn(
                `w-max mx-auto flex items-center gap-[15.32px]`,
                className
            )}
        >
            {children}
        </div>
    );
};

SaleTimer.Description = function SaleTimerDescription({
    className,
    description,
}) {
    return (
        <p className={cn("font-medium text-base leading-[20.8px]", className)}>
            {description}
        </p>
    );
};
