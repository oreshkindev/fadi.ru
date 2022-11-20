// принимаем массив с дубликатами сортируем и объединяем по ключу
// возвращаем новый массив
// TODO: сделать универсальным

export default (array) => {
    return array
        .sort((a, b) => (a.product.id != b.product.id ? a.product.id - b.product.id : a.sku_product != b.sku_product ? a.sku_product - b.sku_product : a.size - b.size))
        .reduce((acc, item) => {
            let key = acc.find((i) => i.product.id == item.product.id)
            if (key != null) {
                key.sku_product.push(item.sku_product)
                key.size.push(item.size)
            } else {
                acc.push({
                    sku_product: [item.sku_product],
                    product: item.product,
                    size: [item.size],
                })
            }
            return acc
        }, [])
}
