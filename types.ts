export type Product = {
  id: number;
  name: string;
  image: string | undefined;
  price: number;
};

export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  size: PizzaSize;
  quantity: number;
};

export type PizzaSize = "S" | "M" | "L" | "XL";
