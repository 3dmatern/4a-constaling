import { TariffFormRadio } from "./uikit/TariffFormRadio";
import { UiModal } from "./uikit/UiModal";

export const ModalSaleStop = ({
    tariffs,
    period,
    onChangePeriod,
    isOpen,
    onClose,
}) => {
    return (
        <UiModal isOpen={isOpen} onClose={onClose}>
            <div className="pt-[50px] px-5 pb-5 bg-white md:pt-[61px] md:px-10 md:pb-10">
                <div
                    className="
                        flex items-center justify-center py-1 px-2.5
                        absolute top-0 left-0 bg-teal-main
                        md:left-[42px]
                    "
                >
                    <p
                        className="
                            font-medium text-sm leading-[18.2px] text-white tracking-wide
                            md:text-base md:leading-[20.8px]
                        "
                    >
                        горящее предложение
                    </p>
                </div>

                <div
                    className="
                        flex flex-col items-center justify-center gap-[22px] text-gray-900
                        md:gap-[30px]
                    "
                >
                    <h2
                        className="
                            max-w-[245px]
                            font-['Rubik'] font-bold text-2xl leading-[31.2px] uppercase
                            md:max-w-max md:text-3xl md:leading-[39px]
                        "
                    >
                        Не упусти свой
                        <span className="text-teal-main"> последний шанс</span>
                    </h2>

                    <div
                        className="
                            flex flex-col items-start gap-2 font-medium text-[15px] 
                            leading-[19.5px]
                            md:text-2xl md:leading-[31.2px]
                        "
                    >
                        <p>
                            Мы знаем, как трудно начать..
                            <span className="font-bold"> Поэтому!</span>
                        </p>

                        <div
                            className="
                                w-[295px] py-3 border-[1.5px] border-teal-main 
                                rounded-[30px] font-bold text-center
                                md:w-[458px]
                            "
                        >
                            <p>
                                Дарим скидку для
                                <span className="text-teal-main">
                                    {" "}
                                    лёгкого старта 🏃‍♂️
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <p
                    className="
                        mt-[26px] mb-[14px] font-medium text-[15px] leading-[19.5px] 
                        text-gray-900 text-center
                        md:mt-10 md:mb-5 md:text-2xl md:leading-[31.2px] md:text-start
                    "
                >
                    Посмотри, что мы для тебя приготовили🔥
                </p>

                <form
                    action=""
                    className="w-full flex flex-col items-center justify-center gap-5"
                >
                    <div
                        className="
                            w-full flex flex-col items-center justify-center gap-1.5
                            md:flex-row md:flex-wrap md:gap-5
                        "
                    >
                        {tariffs?.slice(0, tariffs.length - 1).map((tariff) => (
                            <TariffFormRadio
                                key={tariff.id}
                                name="period"
                                value={tariff.name}
                                percent={30}
                                isChecked={period === tariff.name}
                                onChange={onChangePeriod}
                                className="
                                    pt-6 px-5 pb-[18px] md:pt-[26px] md:px-0 md:pl-[26px] md:pr-[22px] md:pb-5
                                    md:max-w-[210px]
                                "
                                isModal
                            >
                                <TariffFormRadio.Content className="gap-[19px] md:gap-0">
                                    <TariffFormRadio.ContentTitle
                                        title={tariff.name}
                                        className="
                                            text-stone-800 md:text-[26px] md:leading-[26px] md:pb-[50px]
                                        "
                                    />
                                    <Divider />
                                    <TariffFormRadio.ContentPrice
                                        price={tariff.price}
                                        salePrice={tariff.price + 500}
                                        percent={30}
                                        isModal
                                        className="
                                            static min-h-max text-stone-800
                                            md:w-max md:min-h-max md:mt-9 md:mb-0
                                        "
                                    />
                                </TariffFormRadio.Content>
                            </TariffFormRadio>
                        ))}
                    </div>

                    <button
                        type="button"
                        className={`
                            w-full block py-[21px] text-center text-white
                            font-['Rubik'] font-medium text-xl leading-5 bg-orange-main
                            rounded-[30px] md:max-w-[281px] md:mt-[20px] md:mb-0
                        `}
                    >
                        Начать тренироваться
                    </button>
                </form>
            </div>
        </UiModal>
    );
};

const Divider = () => {
    return (
        <div className="hidden w-[134px] h-px mx-auto bg-gray-200 md:block" />
    );
};
