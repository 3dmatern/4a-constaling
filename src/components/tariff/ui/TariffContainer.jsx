import { cn } from "../../../../lib/utils";

export const TariffContainer = ({ className, children }) => {
    return (
        <article
            className={cn(
                `w-full pt-5 px-5 pb-5 bg-neutral-150 md:pt-[27px] md:pb-[107px]`,
                className
            )}
        >
            {children}
        </article>
    );
};
