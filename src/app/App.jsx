import Sale from "../components/sale";
import Tariff from "../components/tariff";

import { useAppForm } from "../hooks/useAppForm";

function App() {
    const {
        isPopularTariffs,
        isDiscountTariffs,
        period,
        isRight,
        isTimer,
        onChangePeriod,
        onChangeRight,
        onChangeIsTimer,
    } = useAppForm();

    return (
        <>
            <Sale
                tariffs={isDiscountTariffs}
                period={period}
                onChangePeriod={onChangePeriod}
                onChangeRight={onChangeRight}
                onChangeIsTimer={onChangeIsTimer}
            />
            <Tariff
                tariffs={isPopularTariffs}
                period={period}
                isRight={isRight}
                isTimer={isTimer}
                onChangePeriod={onChangePeriod}
                onChangeRight={onChangeRight}
            />
        </>
    );
}

export default App;
