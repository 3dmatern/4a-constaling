import { SaleContainer } from "./ui/SaleContainer";
import { SaleTimer } from "./SaleTimer";
import { SaleTimerCard } from "./ui/SaleTimerCard";
import { UiContainer } from "../uikit/UiContainer";

const Sale = () => {
    return (
        <SaleContainer>
            <UiContainer>
                <SaleTimer>
                    <SaleTimer.Description description="Скидка действует:" />

                    <SaleTimerCard>
                        <SaleTimerCard.Count
                            count={"09"}
                            description={"часов"}
                        />
                        <SaleTimerCard.Divider />
                        <SaleTimerCard.Count
                            count={"59"}
                            description={"минут"}
                        />
                    </SaleTimerCard>
                </SaleTimer>
            </UiContainer>
        </SaleContainer>
    );
};

export default Sale;
