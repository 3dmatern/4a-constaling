import { ModalSaleStop } from "../components/ModalSaleStop";
import Sale from "../components/sale";
import Tariff from "../components/tariff";

import { useTimer } from "../hooks/useTimer";
import { useAppForm } from "../hooks/useAppForm";

function App() {
    const {
        minutesString,
        isDanger,
        secondsString,
        isOpenModal,
        onCloseModal,
    } = useTimer();
    const { tariffs, period, isRight, onChangePeriod, onChangeRight } =
        useAppForm({ isOpenModal });

    return (
        <>
            <Sale
                minutes={minutesString}
                seconds={secondsString}
                isDanger={isDanger}
            />
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
