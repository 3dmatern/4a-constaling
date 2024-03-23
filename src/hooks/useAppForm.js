import { useCallback, useEffect, useState } from "react";

export const useAppForm = () => {
    const [isPopularTariffs, setIsPopularTariffs] = useState([]);
    const [isDiscountTariffs, setIsDiscountTariffs] = useState([]);
    const [period, setPeriod] = useState("");
    const [isTimer, setIsTimer] = useState(false);
    const [isRight, setIsRight] = useState(false);

    useEffect(() => {
        fetch("https://t-pay.iqfit.app/subscribe/list-test")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((tariff) => {
                    if (tariff.isPopular) {
                        setIsPopularTariffs((prev) => {
                            const prevTariffs = prev.slice();
                            prevTariffs.push(tariff);
                            return prevTariffs;
                        });
                    }

                    if (tariff.isDiscount) {
                        setIsDiscountTariffs((prev) => {
                            const prevTariffs = prev.slice();
                            prevTariffs.push(tariff);
                            return prevTariffs;
                        });
                    }
                });
            })
            .catch((err) => console.error(err));
    }, []);

    const handleChangePeriod = ({ target }) => {
        setPeriod((prev) => target.value);
    };

    const handleChangeRight = useCallback(() => {
        setIsRight((prev) => !prev);
    }, []);

    const handleChangeIsTimer = useCallback(() => {
        setIsTimer((prev) => true);
    }, []);

    return {
        isPopularTariffs,
        isDiscountTariffs,
        period,
        isRight,
        isTimer,
        onChangePeriod: handleChangePeriod,
        onChangeRight: handleChangeRight,
        onChangeIsTimer: handleChangeIsTimer,
    };
};
