import { SaleContainer } from "./ui/SaleContainer";
import { SaleTimer } from "./SaleTimer";
import { SaleTimerCard } from "./ui/SaleTimerCard";
import { UiContainer } from "../uikit/UiContainer";

const Sale = ({ minutes, seconds, isDanger }) => {
    return (
        <SaleContainer>
            <UiContainer>
                <SaleTimer>
                    <SaleTimer.Description description="Скидка действует:" />

                    <SaleTimerCard
                        className={isDanger ? "text-orange-main" : ""}
                    >
                        <SaleTimerCard.Count
                            count={minutes}
                            description={"часов"}
                        />
                        <SaleTimerCard.Divider />
                        <SaleTimerCard.Count
                            count={seconds}
                            description={"минут"}
                        />
                    </SaleTimerCard>
                </SaleTimer>
            </UiContainer>
        </SaleContainer>
    );
};

export default Sale;
