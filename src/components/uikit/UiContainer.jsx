import { cn } from "../../../lib/utils";

export const UiContainer = ({ className, children }) => {
    return (
        <section className={cn("container mx-auto", className)}>
            {children}
        </section>
    );
};
