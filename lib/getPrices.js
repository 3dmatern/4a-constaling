export const getPrices = (price, percent) => {
    const salePrice = price;
    const defaultPrice = Math.ceil(
        (salePrice / (100 - percent)) * percent + salePrice
    );

    return {
        salePrice,
        defaultPrice,
    };
};
