import { UiContainer } from "../uikit/UiContainer";
import { TariffContainer } from "./ui/TariffContainer";
import { TariffHeadding } from "./ui/TariffHeadding";
import TariffForm from "./TariffForm";

const Tariff = ({
    tariffs,
    period,
    isRight,
    isTimer,
    onChangePeriod,
    onChangeRight,
}) => {
    return (
        <TariffContainer>
            <UiContainer className="flex flex-col items-center gap-5 md:gap-[68px]">
                <TariffHeadding title="Выберите подходящий тарифный план" />
                <TariffForm
                    tariffs={tariffs}
                    period={period}
                    isRight={isRight}
                    isTimer={isTimer}
                    onChangePeriod={onChangePeriod}
                    onChangeRight={onChangeRight}
                />
            </UiContainer>
        </TariffContainer>
    );
};

export default Tariff;
