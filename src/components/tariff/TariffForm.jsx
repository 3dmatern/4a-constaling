import { useState } from "react";

import PosterImage from "./images/man.png";

import { TariffPoster } from "./ui/TariffPoster";

const TARIFFS = [
    {
        name: "1 месяц",
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

    return (
        <form action="">
            <TariffPoster src={PosterImage} alt="poster" />
            {TARIFFS.map((tariff) => (
                <label key={tariff.id}>
                    <div>
                        <h5>{tariff.name}</h5>
                        <p>Текст</p>
                    </div>
                    <div>
                        <p>{tariff.price}₽</p>
                        <p>{tariff.price + 500}₽</p>
                    </div>
                    <input
                        type="radio"
                        name="period"
                        value="oneMonth"
                        checked={period === "oneMonth"}
                    />
                </label>
            ))}
        </form>
    );
};

export default TariffForm;
