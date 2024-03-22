import { cn } from "../../../../lib/utils";
import { SaleStarImage } from "../../images/SaleStarImage";

export const TariffFormCard = ({
    className,
    percent,
    title,
    description,
    price,
    salePrice,
    name,
    value,
    isChecked,
    onChange,
}) => {
    return (
        <label
            className={cn(
                `
                    w-[335px] pt-9 pb-[26px] pl-6 relative
                    flex items-center gap-6
                    border-2 border-stone-300 rounded-[20px] 
                    bg-white cursor-pointer
                `,
                isChecked && "border-teal-main bg-teal-main/05",
                className
            )}
        >
            <div
                className={`min-w-[100px] max-w-[102px] flex flex-col items-start gap-[18px]`}
            >
                <h5
                    className={`
                        font-['Bebas_Neue_Cyrillic'] font-normal text-2xl leading-6
                        text-gray-500 uppercase
                    `}
                >
                    {title}
                </h5>
                <p
                    className={`font-medium text-sm leading-[18.2px] text-black-desc-tariff`}
                >
                    {description}
                </p>
            </div>

            <div className={`flex flex-col items-end`}>
                <p className="font-bold text-[44px] leading-[48.4px]">
                    {price}₽
                </p>
                <p
                    className={`
                        font-medium text-xl leading-[22px] text-slate-400
                        line-through
                    `}
                >
                    {salePrice}₽
                </p>
            </div>
            <input
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
                className="absolute inset-0 opacity-0"
            />

            <div
                className={`
                    size-[50px] flex flex-col items-center justify-center
                    absolute top-1 right-[9px] z-0
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
        </label>
    );
};
