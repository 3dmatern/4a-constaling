import { useEffect, useState } from "react";

import { SaleContainer } from "./ui/SaleContainer";
import { SaleTimer } from "./SaleTimer";
import { SaleTimerCard } from "./ui/SaleTimerCard";
import { UiContainer } from "../uikit/UiContainer";
import { ModalSaleStop } from "../ModalSaleStop";

const SECONDS = 120;

const Sale = ({
    tariffs,
    period,
    onChangePeriod,
    onChangeRight,
    onChangeIsTimer,
}) => {
    const [seconds, setSeconds] = useState(SECONDS);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondsString = String(seconds % 60).padStart(2, "0");

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
            onChangeIsTimer();
            onChangeRight();
        }
    }, [onChangeIsTimer, onChangeRight, seconds]);

    const handleCloseModal = () => {
        setIsOpenModal((prev) => false);
    };

    const getClassNameTimer = () => {
        if (seconds < 30 && seconds !== 0) {
            return "animate-pulsTimer";
        } else if (seconds === 0) {
            return "animate-none text-orange-main";
        }
    };

    return (
        <>
            <SaleContainer>
                <UiContainer>
                    <SaleTimer>
                        <SaleTimer.Description description="Скидка действует:" />

                        <SaleTimerCard className={getClassNameTimer()}>
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
