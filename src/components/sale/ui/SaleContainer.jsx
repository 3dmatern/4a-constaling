import { cn } from "../../../../lib/utils";

export const SaleContainer = ({ className, children }) => {
    return (
        <header className={cn(`w-full py-2 bg-white`, className)}>
            {children}
        </header>
    );
};
