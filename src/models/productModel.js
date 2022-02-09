const productModel = (item) => {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        priceDiscount: item.priceDiscount,
        images: item.images,
        countrySale: item.countrySale
    }
}

module.exports = productModel;