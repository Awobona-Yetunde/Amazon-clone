export const cart = [];

export function addToCart(productId, quantity) {
  let existingProduct;

  cart.forEach((item) => {
    if (productId === item.productId) {
      existingProduct = item;
    }
  });
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      // productId: productId,
      // quantity: quantity,
      productId,
      quantity,
    });
  }
}