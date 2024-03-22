import { SaleContainer } from "./ui/SaleContainer";
import { SaleTimer } from "./SaleTimer";
import { SaleTimerCard } from "./ui/SaleTimerCard";
import { UiContainer } from "../uikit/UiContainer";
import { ModalSaleStop } from "../ModalSaleStop";
import { useEffect, useState } from "react";

const SECONDS = 5;

const Sale = ({ tariffs, period, onChangePeriod, onChangeRight }) => {
    const [seconds, setSeconds] = useState(SECONDS);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondsString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 30;

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => Math.max(s - 1, 0));
        }, 1000);

        return () => {
            clearInterval(interval);
            setSeconds(SECONDS);
        };
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            setIsOpenModal((prev) => true);
            onChangeRight();
        }
    }, [onChangeRight, seconds]);

    const handleCloseModal = () => {
        setIsOpenModal((prev) => false);
    };

    return (
        <>
            <SaleContainer>
                <UiContainer>
                    <SaleTimer>
                        <SaleTimer.Description description="Скидка действует:" />

                        <SaleTimerCard
                            className={isDanger ? "text-orange-main" : ""}
                        >
                            <SaleTimerCard.Count
                                count={minutesString}
                                description={"часов"}
                            />
                            <SaleTimerCard.Divider />
                            <SaleTimerCard.Count
                                count={secondsString}
                                description={"минут"}
                            />
                        </SaleTimerCard>
                    </SaleTimer>
                </UiContainer>
            </SaleContainer>
            <ModalSaleStop
                tariffs={tariffs}
                period={period}
                onChangePeriod={onChangePeriod}
                isOpen={isOpenModal}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Sale;
