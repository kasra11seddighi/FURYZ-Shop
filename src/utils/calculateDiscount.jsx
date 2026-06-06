export function calculateDiscount(price, discountPercentage) {
  if (!discountPercentage) return price;

  const discount = price * (discountPercentage / 100);
  return +(price - discount).toFixed(2);
}
