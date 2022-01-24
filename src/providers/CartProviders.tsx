import { useState, ReactNode, createContext, useContext } from "react";
import { api } from "../services/api";
import { useAuth } from "./AuthProviders";

interface CartProviderProps {
  children: ReactNode;
}
interface Product {
  ProductId: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface CartProviderData {
  products: Product[];
  cart: Product[];
  getProducts: () => void;
  filterProducts: (filter: string) => void;
  getCart: () => void;
}
const CartContext = createContext<CartProviderData>({} as CartProviderData);

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
const CartProvider = ({ children }: CartProviderProps) => {
  const { authToken } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const getProducts = () => {
    api
      .get("products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => err);
  };

  const filterProducts = (filter: string) => {
    if (filter.length > 0) {
      api
        .get(`products?name=${filter}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => err);
    } else {
      getProducts();
    }
  };
  const getCart = () => {
    api
      .get("cart")
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => err);
  };

  /*
  const addToCart = (product: Product) => {
    api
      .post("cart", products, authToken)
      .then((response) => console.log(1))
      .catch((err) => console.log(err));
  };
*/
  return (
    <CartContext.Provider
      value={{ getProducts, filterProducts, getCart, products, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
