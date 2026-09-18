import { Search, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { cartStore } from "../store/cart";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cartCount, setCartCount] = useState(cartStore.getTotalItems());
  const currentQuery = searchParams.get("q") ?? "";

  useEffect(() => {
    const updateCartCount = () => setCartCount(cartStore.getTotalItems());
    updateCartCount();

    const unsubscribe = cartStore.subscribe(updateCartCount);
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearchChange = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (!value.trim()) {
      nextParams.delete("q");
    } else {
      nextParams.set("q", value.trim());
    }

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            BLOOM<span className="text-yellow-500">SHOP</span>
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            Contact
          </Link>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex h-11 w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-slate-50 pl-3.5 shadow-sm">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              type="text"
              value={currentQuery}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Search Products..."
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            to="/cart"
            className="relative flex items-center rounded-full border border-amber-300 bg-amber-50 p-2.5 text-slate-800 transition hover:bg-amber-100"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f5c518] px-1 text-[10px] font-bold text-slate-900">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/sign-in"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            signIn
          </Link>
          <Link
            to="/sign-up"
            className="rounded-full bg-[#f5c518] px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-[#e6b800]"
          >
            signUp
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
