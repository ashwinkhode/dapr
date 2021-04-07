const isPresentHelper = (page, product) => !!page.find(
    (item) => item.id === product.id
)

export default isPresentHelper