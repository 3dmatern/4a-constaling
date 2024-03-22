import { useState } from "react";

import PosterImage from "./images/man.png";

import { TariffPoster } from "./ui/TariffPoster";
import { TariffFormRadio } from "../uikit/TariffFormRadio";
import { TariffFormCheck } from "./ui/TariffFormCheck";

const TariffForm = ({
    tariffs,
    period,
    isRight,
    onChangePeriod,
    onChangeRight,
}) => {
    return (
        <div className="w-full">
            <div
                className={`
                    flex flex-col items-center gap-2.5 md:gap-8
                    lg:flex-row lg:items-start lg:justify-center lg:gap-[79px]
                `}
            >
                <TariffPoster src={PosterImage} alt="poster" />

                <form action="" className="max-w-[585px] w-full">
                    <div
                        className={`
                            flex flex-col items-center gap-2.5 mx-auto 
                            md:flex-row md:flex-wrap md:gap-3
                        `}
                    >
                        {tariffs?.slice(0, tariffs.length - 1).map((tariff) => (
                            <TariffFormRadio
                                key={tariff.id}
                                name="period"
                                value={tariff.name}
                                percent={30}
                                isChecked={period === tariff.name}
                                onChange={onChangePeriod}
                            >
                                <TariffFormRadio.Content>
                                    <TariffFormRadio.ContentTitle
                                        title={tariff.name}
                                    />
                                    <TariffFormRadio.ContentPrice
                                        price={tariff.price}
                                        salePrice={tariff.price + 500}
                                        percent={30}
                                    />
                                </TariffFormRadio.Content>
                                <TariffFormRadio.Description
                                    description={tariff.description}
                                    className={`md:mx-auto md:text-center`}
                                />
                            </TariffFormRadio>
                        ))}
                        {tariffs.slice(tariffs.length - 1).map((tariff) => (
                            <TariffFormRadio
                                key={tariff.id}
                                name="period"
                                value={tariff.name}
                                percent={30}
                                isChecked={period === tariff.name}
                                onChange={onChangePeriod}
                                className={`
                                    md:max-w-full md:flex-row md:items-center md:mt-[28px] md:pt-6 md:pb-6 
                                    md:gap-0 md:basis-full
                                `}
                            >
                                <TariffFormRadio.Content
                                    className={`flex-row items-baseline`}
                                >
                                    <TariffFormRadio.ContentTitle
                                        title={tariff.name}
                                    />
                                    <TariffFormRadio.ContentPrice
                                        price={tariff.price}
                                        salePrice={tariff.price + 500}
                                        percent={30}
                                        className={`
                                            md:mt-0 md:mb-0 md:ml-[20px] md:mr-[55px]
                                        `}
                                    />
                                </TariffFormRadio.Content>

                                <TariffFormRadio.Description
                                    description={tariff.description}
                                />
                            </TariffFormRadio>
                        ))}
                    </div>

                    <p
                        className={`
                            max-w-[284px] mt-3 mb-[27px] font-medium text-sm leading-[18.2px] 
                            text-black-desc-tariff md:max-w-full md:text-lg md:leading-[23.4px]
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
                        onChange={onChangeRight}
                        className="max-w-[418px]"
                    />

                    <button
                        className={`
                            w-full block mt-[22px] py-[28px] text-center uppercase text-white
                            font-['Rubik'] font-medium text-xl leading-5 bg-orange-main
                            rounded-[60px] md:max-w-[281px] md:mt-[50px] md:mb-[30px]
                        `}
                    >
                        Купить
                    </button>

                    <p className="hidden text-sm leading-[18.2px] font-normal text-gray-main md:block">
                        Нажимая «Купить», Пользователь соглашается на
                        автоматическое списание денежных средств по истечению
                        купленного периода. Дальнейшие списания по тарифам
                        участвующим в акции осуществляются по полной стоимости
                        согласно оферте.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default TariffForm;
