import { useCallback, useEffect, useState } from "react";

export const useAppForm = () => {
    const [tariffs, setTariffs] = useState([]);
    const [period, setPeriod] = useState("");
    const [isRight, setIsRight] = useState(false);

    useEffect(() => {
        fetch("https://t-pay.iqfit.app/subscribe/list-test")
            .then((res) => res.json())
            .then((data) => setTariffs((prev) => data))
            .catch((err) => console.error(err));
    }, []);

    const handleChangePeriod = ({ target }) => {
        setPeriod((prev) => target.value);
    };

    const handleChangeRight = useCallback(() => {
        setIsRight((prev) => !prev);
    }, []);

    return {
        tariffs,
        period,
        isRight,
        onChangePeriod: handleChangePeriod,
        onChangeRight: handleChangeRight,
    };
};
