import { ModalSaleStop } from "../components/ModalSaleStop";
import Sale from "../components/sale";
import Tariff from "../components/tariff";

import { useAppForm } from "../hooks/useAppForm";

function App() {
    const {
        tariffs,
        period,
        isRight,
        isOpenModal,
        onChangePeriod,
        onChangeRight,
        onCloseModal,
    } = useAppForm();

    return (
        <>
            <Sale />
            <Tariff
                tariffs={tariffs}
                period={period}
                isRight={isRight}
                onChangePeriod={onChangePeriod}
                onChangeRight={onChangeRight}
            />
            <ModalSaleStop
                tariffs={tariffs}
                period={period}
                onChangePeriod={onChangePeriod}
                isOpen={isOpenModal}
                onClose={onCloseModal}
            />
        </>
    );
}

export default App;
