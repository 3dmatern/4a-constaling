import Sale from "../components/sale";
import Tariff from "../components/tariff";

import { useAppForm } from "../hooks/useAppForm";

function App() {
    // const {
    //     minutesString,
    //     isDanger,
    //     secondsString,
    //     isOpenModal,
    //     onCloseModal,
    // } = useTimer();
    const { tariffs, period, isRight, onChangePeriod, onChangeRight } =
        useAppForm();

    console.log(tariffs);

    return (
        <>
            <Sale
                tariffs={tariffs}
                period={period}
                onChangePeriod={onChangePeriod}
                onChangeRight={onChangeRight}
            />
            <Tariff
                tariffs={tariffs}
                period={period}
                isRight={isRight}
                onChangePeriod={onChangePeriod}
                onChangeRight={onChangeRight}
            />
        </>
    );
}

export default App;
