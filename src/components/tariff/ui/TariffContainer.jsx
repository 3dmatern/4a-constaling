import { cn } from "../../../../lib/utils";

export const TariffContainer = ({ className, children }) => {
    return (
        <article className={cn(`w-full p-5 bg-neutral-150`, className)}>
            {children}
        </article>
    );
};
