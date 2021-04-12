export const isPresentHelper = (page, product) => !!page.find(
    (item) => item.id === product.id
)

export const discountCalc = (price, mrp) => Math.floor(((mrp - price) / mrp) * 100)