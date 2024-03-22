import { cn } from "../../../../lib/utils";

export const TariffHeadding = ({ className, title }) => {
    return (
        <h1
            className={cn(
                `
                    font-["Rubik"] font-bold text-2xl leading-[26.4px] uppercase
                    md:text-[40px] md:leading-[44px] md:text-center
                `,
                className
            )}
        >
            {title}
        </h1>
    );
};
