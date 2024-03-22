import { cn } from "../../../lib/utils";

import { SaleStarImage } from "../images/SaleStarImage";

export const TariffFormRadio = ({
    className,
    name,
    value,
    percent,
    isChecked,
    onChange,
    children,
    isModal,
}) => {
    return (
        <TariffFormRadioWrapper className={className} isChecked={isChecked}>
            {children}

            {isModal && (
                <div
                    className="
                        flex items-center justify-center bg-white
                        size-5 border-[1.36px] border-teal-main rounded-full
                        absolute top-6 right-5 z-0
                        md:top-[27px] md:right-[22px]
                    "
                >
                    {isChecked && (
                        <div className="size-2.5 bg-teal-main rounded-full" />
                    )}
                </div>
            )}

            <input
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
                className="absolute inset-0 opacity-0 -z-[1]"
            />

            {!isModal && <SaleStar percent={percent} />}
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
    percent,
    isModal,
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
                className={cn(
                    `
                        font-bold text-[44px] leading-[48.4px] -tracking-[2px]
                        md:text-[50px] md:leading-[55px]
                    `,
                    isModal && "relative md:text-[46px] md:leading-[50.6px]"
                )}
            >
                {price}₽
                {isModal && (
                    <SaleStar
                        percent={percent}
                        className={
                            isModal
                                ? "-top-[25px] left-[calc(100%+6px)] md:left-full"
                                : ""
                        }
                    />
                )}
            </p>
            {salePrice && (
                <p
                    className={cn(
                        `
                            font-medium text-xl leading-[22px] text-slate-400 text-end
                            relative md:text-2xl md:leading-[26.4px]
                        `,
                        isModal
                            ? "absolute top-[84px] right-5 md:top-[64px] md:left-[26px] md:right-auto"
                            : "line-through"
                    )}
                >
                    {isModal && (
                        <CrossImage
                            className="
                            w-full h-full absolute top-0 left-0 z-0 text-orange-main
                        "
                        />
                    )}
                    {salePrice}₽
                </p>
            )}
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

const SaleStar = ({ className, percent }) => {
    return (
        <span
            className={cn(
                `
                    size-[50px] flex flex-col items-center justify-center
                    text-[13.33px] leading-[17.33px] absolute top-1 right-[9px] z-0
                    md:-top-[25px]
                `,
                className
            )}
        >
            <SaleStarImage
                className="
                    absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-[1] 
                    text-orange-main
                "
            />
            <span
                className="
                    block w-full text-center font-medium text-white
                "
            >
                -{percent}%
            </span>
        </span>
    );
};

const CrossImage = ({ className }) => {
    return (
        <svg
            className={className}
            width="60"
            height="21"
            viewBox="0 0 60 21"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="0.689324"
                y1="19.6901"
                x2="57.7203"
                y2="1.04948"
                stroke="currentColor"
                strokeWidth="2"
            />
            <line
                x1="1.31068"
                y1="1.04949"
                x2="59.2921"
                y2="20.0007"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};
