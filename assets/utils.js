export function formateDate(stamp) {
  return new Date(++stamp).toLocaleString()
}

export function getTotalPrice(goods) {
  return goods.reduce((acc, item) => {
    acc = acc + (item.count * item.price)
    return acc
  }, 0)
}

export function getDollarPrice(euro) {
  return Math.ceil(euro * 1.13)
}
