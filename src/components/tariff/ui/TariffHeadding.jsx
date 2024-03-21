import { cn } from "../../../../lib/utils";

export const TariffHeadding = ({ className, title }) => {
    return (
        <h1
            className={cn(
                `
                    font-['Rubik'] font-bold text-2xl leading-[26.4px] uppercase
                `,
                className
            )}
        >
            {title}
        </h1>
    );
};
