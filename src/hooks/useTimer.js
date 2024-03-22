import { useEffect, useState } from "react";

const SECONDS = 5;

export const useTimer = () => {
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
        }
    }, [seconds]);

    const handleCloseModal = () => {
        setIsOpenModal((prev) => false);
    };

    return {
        minutesString,
        secondsString,
        isDanger,
        isOpenModal,
        onCloseModal: handleCloseModal,
    };
};
