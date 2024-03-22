import { useEffect, useState } from "react";
import { TARIFFS } from "./constants";

export const useAppForm = () => {
    const [tariffs, setTariffs] = useState([]);
    const [period, setPeriod] = useState("");
    const [isRight, setIsRight] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await TARIFFS;

            setTariffs((prev) => data);
        };

        getData();
    }, []);

    const handleChangePeriod = ({ target }) => {
        setPeriod((prev) => target.value);
    };

    const handleChangeRight = () => {
        setIsRight((prev) => !prev);
    };

    const handleCloseModal = () => {
        setIsOpenModal((prev) => false);
    };

    return {
        tariffs,
        period,
        isRight,
        isOpenModal,
        onChangePeriod: handleChangePeriod,
        onChangeRight: handleChangeRight,
        onCloseModal: handleCloseModal,
    };
};
