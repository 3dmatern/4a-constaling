import { useState } from "react";

import PosterImage from "./images/man.png";

import { TariffPoster } from "./ui/TariffPoster";
import { TariffFormCard } from "./ui/TariffFormCard";
import { TariffFormCheck } from "./ui/TariffFormCheck";

const TARIFFS = [
    {
        name: "1 месяц",
        description: "Чтобы просто начать 👍🏻",
        price: 699,
        lengthInDays: 0,
        isPopular: true,
        isEndless: false,
        isDiscount: false,
        nonDiscountId: null,
        id: "f347d050-073c-4969-ae91-7346f935cf70",
        ownerId: "00000000-0000-0000-0000-000000000000",
        statusId: null,
        creationDateTime: "2024-03-07T14:18:38.5451758+03:00",
        deleted: false,
    },
    {
        name: "3 месяца",
        description: "Привести тело впорядок 💪🏻",
        price: 999,
        lengthInDays: 0,
        isPopular: true,
        isEndless: false,
        isDiscount: false,
        nonDiscountId: null,
        id: "f347d050-073c-4969-ae91-7346f935cf71",
        ownerId: "00000000-0000-0000-0000-000000000000",
        statusId: null,
        creationDateTime: "2024-03-07T14:18:38.5451758+03:00",
        deleted: false,
    },
    {
        name: "1 год",
        description: "Изменить образ жизни🔥",
        price: 2990,
        lengthInDays: 0,
        isPopular: true,
        isEndless: false,
        isDiscount: false,
        nonDiscountId: null,
        id: "f347d050-073c-4969-ae91-7346f935cf72",
        ownerId: "00000000-0000-0000-0000-000000000000",
        statusId: null,
        creationDateTime: "2024-03-07T14:18:38.5451758+03:00",
        deleted: false,
    },
    {
        name: "навсегда",
        description: "Всегда быть в форме ⭐️",
        price: 5990,
        lengthInDays: 0,
        isPopular: true,
        isEndless: false,
        isDiscount: false,
        nonDiscountId: null,
        id: "f347d050-073c-4969-ae91-7346f935cf73",
        ownerId: "00000000-0000-0000-0000-000000000000",
        statusId: null,
        creationDateTime: "2024-03-07T14:18:38.5451758+03:00",
        deleted: false,
    },
];

const TariffForm = () => {
    const [period, setPeriod] = useState("");
    const [isRight, setIsRight] = useState(false);

    const handleChangePeriod = ({ target }) => {
        setPeriod((prev) => target.value);
    };

    const handleChangeRight = () => {
        setIsRight((prev) => !prev);
    };

    return (
        <form action="">
            <div
                className={`
                    flex flex-col items-center gap-2.5 md:flex-row md:gap-[79px] md:items-start
                    md:justify-center
                `}
            >
                <TariffPoster src={PosterImage} alt="poster" />

                <div className="flex flex-col items-start gap-3">
                    <div
                        className={`
                            flex flex-col items-center gap-2.5 mx-auto md:flex-row md:flex-wrap
                        `}
                    >
                        {TARIFFS.slice(0, TARIFFS.length - 1).map((tariff) => (
                            <TariffFormCard
                                key={tariff.id}
                                percent={30}
                                title={tariff.name}
                                description={tariff.description}
                                price={tariff.price}
                                salePrice={tariff.price + 500}
                                name="period"
                                value={tariff.name}
                                isChecked={period === tariff.name}
                                onChange={handleChangePeriod}
                            />
                        ))}
                        {TARIFFS.slice(TARIFFS.length - 1).map((tariff) => (
                            <TariffFormCard
                                key={tariff.id}
                                percent={30}
                                title={tariff.name}
                                description={tariff.description}
                                price={tariff.price}
                                salePrice={tariff.price + 500}
                                name="period"
                                value={tariff.name}
                                isChecked={period === tariff.name}
                                onChange={handleChangePeriod}
                            />
                        ))}
                    </div>

                    <p
                        className={`
                            max-w-[284px] font-medium text-sm leading-[18.2px] 
                            text-black-desc-tariff
                        `}
                    >
                        Следуя плану на 3 месяца, люди получают в 2 раза лучший
                        результат, чем за 1 месяц
                    </p>

                    <TariffFormCheck
                        isRight={isRight}
                        name="right"
                        description={
                            <p className="font-normal text-base leading-[17.6px] text-gray-main">
                                Я соглашаюсь с{" "}
                                <a href="#" className="text-blue-link">
                                    {" "}
                                    Правилами сервиса
                                </a>{" "}
                                и условиями{" "}
                                <a href="#" className="text-blue-link">
                                    Публичной оферты
                                </a>
                                .
                            </p>
                        }
                        onChange={handleChangeRight}
                        className="mt-9 mb-[22px]"
                    />

                    <button
                        className={`
                            w-full block py-[28px] text-center uppercase text-white
                            font-['Rubik'] font-medium text-xl leading-5 bg-orange-main
                            rounded-[60px]
                        `}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TariffForm;
