interface Product {
    name: string;
    price: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  
  const products: Product[] = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 30 },
  ];
  
  const totalPrice: number = calculateTotalPrice(products);
  console.log("Total Price:", totalPrice);
  