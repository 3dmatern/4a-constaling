import { createPortal } from "react-dom";

import { cn } from "../../../lib/utils";

export const UiModal = ({ className, children, isOpen = false, onClose }) => {
    if (!isOpen) return null;

    const modalContent = (
        <div
            className={cn(
                `fixed inset-0 py-[60px] px-5 bg-black/40 backdrop-blur-sm overflow-y-auto`,
                className
            )}
        >
            <div
                className="
                    min-w-[335px] max-w-[750px] flex-flex-col mx-auto bg-transparent relative
                "
            >
                <button
                    onClick={onClose}
                    className="
                        size-5 flex items-center justify-center text-gray-300
                        absolute top-2.5 right-2.5
                    "
                >
                    <CrossLightIcon className="size-5" />
                </button>
                {children}
            </div>
        </div>
    );

    return createPortal(modalContent, document.getElementById("modals"));
};

function CrossLightIcon({ className }) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 5L5 15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 5L15 15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
