import { cn } from "../../../../lib/utils";

export const TariffFormCheck = ({
    className,
    isRight,
    name,
    onChange,
    description,
}) => {
    return (
        <label
            className={cn(
                `
                    flex items-center gap-3 cursor-pointer
                `,
                className
            )}
        >
            <div
                className={cn(
                    `
                        min-w-6 max-w-6 min-h-6 max-h-6 flex flex-col items-center justify-center
                        border border-teal-main rounded-[4.8px] bg-white 
                        relative z-0 
                    `,
                    isRight && "text-white bg-teal-main"
                )}
            >
                {isRight && <DoneCheckImage />}
                <input
                    type="checkbox"
                    name={name}
                    defaultChecked={isRight}
                    onChange={onChange}
                    className={`
                        absolute inset-0 opacity-0 border-teal-main bg-teal-main cursor-pointer
                    `}
                />
            </div>
            {description}
        </label>
    );
};

const DoneCheckImage = ({ className }) => {
    return (
        <svg
            className={className}
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 6.75791L5.56923 10.8L14.2 1.20001"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
