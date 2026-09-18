import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useSyncExternalStore } from "react";
import { cartStore } from "../store/cart";

const Cart = () => {
  const cart = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getCart,
    cartStore.getCart,
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-6xl px-6 py-4 lg:px-12">
      <div className="mb-8 flex items-center gap-3">
        <ShoppingBag className="text-amber-600" />
        <h1 className="text-3xl font-semibold">Your cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
          <p className="text-xl font-semibold">Your cart is empty.</p>
          <p className="mt-2 text-slate-600">
            Add a pair of sneakers to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-[20px] object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="mt-1 text-amber-700">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => cartStore.deductItem(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="min-w-6 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      cartStore.addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => cartStore.removeItem(item.id)}
                  className="flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            ))}
          </div>

          <aside className="rounded-[28px] bg-[#18181b] p-6 text-white shadow-lg">
            <h2 className="text-2xl font-semibold">Order summary</h2>

            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-lg font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="mt-8 w-full rounded-full bg-[#f5c518] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[#e1b400]">
              Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
