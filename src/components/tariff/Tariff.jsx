import { UiContainer } from "../uikit/UiContainer";
import { TariffContainer } from "./ui/TariffContainer";
import { TariffHeadding } from "./ui/TariffHeadding";
import TariffForm from "./TariffForm";

const Tariff = () => {
    return (
        <TariffContainer>
            <UiContainer className="flex flex-col items-center gap-5">
                <TariffHeadding title="Выберите подходящий тарифный план" />
                <TariffForm />
            </UiContainer>
        </TariffContainer>
    );
};

export default Tariff;
