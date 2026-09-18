export type CartProduct = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

const CART_KEY = "bloomshop-cart";

const readCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const value = window.localStorage.getItem(CART_KEY);
    return value ? (JSON.parse(value) as CartItem[]) : [];
  } catch {
    return [];
  }
};

let cart: CartItem[] = readCart();
const listeners = new Set<() => void>();

const notify = () => {
  listeners.forEach((listener) => listener());
};

const persist = () => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  notify();
};

export const cartStore = {
  getCart: () => cart,
  getTotalItems: () => cart.reduce((sum, item) => sum + item.quantity, 0),
  getTotalPrice: () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  addItem: (product: CartProduct) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    } else {
      cart = [...cart, { ...product, quantity: 1 }];
    }

    persist();
  },
  removeItem: (id: string) => {
    cart = cart.filter((item) => item.id !== id);
    persist();
  },
  deductItem: (id: string) => {
    cart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);
    persist();
  },
  clearCart: () => {
    cart = [];
    persist();
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
     return () => listeners.delete(listener);
  },
};
