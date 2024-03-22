import { useEffect, useState } from "react";

export const useAppForm = ({ isOpenModal }) => {
    const [tariffs, setTariffs] = useState([]);
    const [period, setPeriod] = useState("");
    const [isRight, setIsRight] = useState(false);

    useEffect(() => {
        fetch("https://t-pay.iqfit.app/subscribe/list-test")
            .then((res) => res.json())
            .then((data) => setTariffs((prev) => data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (isOpenModal) {
            setIsRight((prev) => true);
        }
    }, [isOpenModal]);

    const handleChangePeriod = ({ target }) => {
        setPeriod((prev) => target.value);
    };

    const handleChangeRight = () => {
        setIsRight((prev) => !prev);
    };

    return {
        tariffs,
        period,
        isRight,
        onChangePeriod: handleChangePeriod,
        onChangeRight: handleChangeRight,
    };
};
