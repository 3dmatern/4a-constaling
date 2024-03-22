import { cn } from "../../../../lib/utils";

import { SaleStarImage } from "../../images/SaleStarImage";

export const TariffFormRadio = ({
    className,
    percent,
    name,
    value,
    isChecked,
    onChange,
    children,
}) => {
    return (
        <TariffFormRadioWrapper className={className} isChecked={isChecked}>
            {children}

            <input
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
                className="absolute inset-0 opacity-0 -z-[1]"
            />

            <div
                className={`
                    size-[50px] flex flex-col items-center justify-center
                    absolute top-1 right-[9px] z-0
                    md:-top-[25px]
                `}
            >
                <SaleStarImage
                    className={`
                        absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-[1] 
                        text-orange-main
                    `}
                />
                <p
                    className={`
                        text-[13.33px] leading-[17.33px] text-white text-center font-medium
                    `}
                >
                    -{percent}%
                </p>
            </div>
        </TariffFormRadioWrapper>
    );
};

const TariffFormRadioWrapper = ({ className, isChecked, children }) => {
    return (
        <label
            className={cn(
                `
                    max-w-[335px] w-full pt-9 px-6 pb-[26px] flex flex-col items-start gap-[18px]
                    relative border-2 border-stone-300 rounded-[20px] bg-white cursor-pointer
                    hover:border-teal-main hover:bg-teal-main/05 transition-colors
                    md:max-w-[187px] md:pt-[45px] md:gap-0 md:basis-1/3
                `,
                isChecked && "border-teal-main bg-teal-main/05",
                className
            )}
        >
            {children}
        </label>
    );
};

TariffFormRadio.Content = function TariffFormRadioContent({
    className,
    children,
}) {
    return <div className={cn("flex flex-col", className)}>{children}</div>;
};

TariffFormRadio.ContentTitle = function TariffFormRadioContentTitle({
    className,
    title,
}) {
    return (
        <h5
            className={cn(
                `
                    font-['Bebas_Neue_Cyrillic'] text-2xl leading-6
                    text-start text-gray-500 uppercase
                    md:text-3xl md:leading-[30px]
                `,
                className
            )}
        >
            {title}
        </h5>
    );
};

TariffFormRadio.ContentPrice = function TariffFormRadioContentPrice({
    className,
    price,
    salePrice,
}) {
    return (
        <div
            className={cn(
                `
                    min-h-[67px] absolute top-9 left-[148px]
                    md:min-h-[79px] md:static md:mt-[21px] md:mb-[18px]
                `,
                className
            )}
        >
            <p
                className={`
                    font-bold text-[44px] leading-[48.4px] -tracking-[2px]
                    md:text-[50px] md:leading-[55px]
                `}
            >
                {price}₽
            </p>
            <p
                className={`
                    font-medium text-xl leading-[22px] text-slate-400 text-end
                    line-through md:text-2xl md:leading-[26.4px]
                `}
            >
                {salePrice}₽
            </p>
        </div>
    );
};

TariffFormRadio.Description = function TariffFormRadioDescription({
    className,
    description,
}) {
    return (
        <p
            className={cn(
                `
                    max-w-[105px] text-start font-medium text-sm leading-[18.2px] 
                    text-black-desc-tariff
                `,
                className
            )}
        >
            {description}
        </p>
    );
};
