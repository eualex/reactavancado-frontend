export function formatPrice(price: string | number) {
  const priceToNumber = Number(price)

  if (isNaN(priceToNumber)) return

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
    .format(priceToNumber)
    .replace(/(\.|,)00$/g, '')

  return formattedPrice
}
