import { cn } from "../../../../lib/utils";

export const TariffPoster = ({ className, src, alt }) => {
    return (
        <picture>
            <img
                src={src}
                alt={alt}
                className={cn(`max-w-[277px] max-h-[441px]`, className)}
            />
        </picture>
    );
};
