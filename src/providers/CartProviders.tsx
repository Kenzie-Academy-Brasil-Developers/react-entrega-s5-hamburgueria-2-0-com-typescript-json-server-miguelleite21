import { useState, ReactNode, createContext, useContext } from "react";

import { api } from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}
interface Product {
  ProductId: number;
  name: string;
  category: string;
  price: number;
  img: string;
  qnt?: number;
}

interface CartProviderData {
  products: Product[];
  cart: Product[];
  getProducts: () => void;
  filterProducts: (filter: string) => void;
  addToCart: (product: Product) => void;
  removeAll: () => void;
  removeToCart: (product: Product) => void;
}
const CartContext = createContext<CartProviderData>({} as CartProviderData);

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

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

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  const removeAll = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    console.log(cart);
  };
  const removeToCart = (product: Product) => {
    const index = cart.indexOf(product);
    const newCart = cart.filter((productOnCart, i) => i !== index);
    setCart(newCart);
    console.log(cart);

    localStorage.setItem("@kenzieshop:cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider
      value={{
        getProducts,
        filterProducts,
        addToCart,
        removeAll,
        removeToCart,
        products,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
//função de adicionar quantidade de item
/* if (cart.some((item) => item.ProductId === product.ProductId)) {
      const oldProduct = cart.find(
        (item) => item.ProductId === product.ProductId
      );
      const index = cart.indexOf(product);
      const newCart = cart.filter((productOnCart, i) => i !== index);
      let qnt = 0;
      if (oldProduct?.qnt) {
        qnt = oldProduct.qnt;
        qnt++;
      } else {
        qnt = 0;
      }

      let newProduct = {
        ProductId: oldProduct?.ProductId,
        name: oldProduct?.name,
        category: oldProduct?.category,
        price: oldProduct?.price,
        img: oldProduct?.img,
        qnt: qnt,
      };
      setCart([...newCart, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...newCart, newProduct]));
      console.log(newProduct);
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };*/
