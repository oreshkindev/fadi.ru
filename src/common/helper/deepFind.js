// принимаем массив с дубликатами сортируем и объединяем по ключу
// возвращаем новый массив
// TODO: сделать универсальным

const deepFind = (k, obj) => {
    const stack = [obj]
    const result = []
    while (stack.length) {
        const item = stack.pop()
        if (Array.isArray(item)) {
            item.forEach((el) => stack.push(el))
            continue
        }
        if (item && typeof item === 'object') Object.entries(item).forEach(([key, value]) => (key === k ? result.push(value) : stack.push(value)))
    }
    return result.flat().slice(-1, 2)
}

export default deepFind
