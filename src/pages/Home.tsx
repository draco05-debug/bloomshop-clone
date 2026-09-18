import { Link, useSearchParams } from "react-router";
import AddToCartButton from "../constant/icon";
import { products } from "../constant/product";

const Home = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const filteredProducts = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : products;

  return (
    <div className="">
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-12 text-center lg:px-12 lg:pt-14">
        <h1 className="text-4xl font-semibold text-yellow-500 sm:text-5xl lg:text-6xl">
          Step Into Style
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Discover our latest collection of premium sneakers — comfort, design,
          and performance in every pair.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-12">
        {filteredProducts.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <p className="text-xl font-semibold text-slate-800">
              No products found
            </p>
            <p className="mt-2 text-slate-600">
              Try a different search like “runner”, “street”, or “classic”.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-[#f5c518] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[#e6b800]"
            >
              Clear search
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-[#f5f1eb] p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full rounded-[20px] object-cover"
                  />
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-lg font-medium text-amber-700">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <AddToCartButton product={product} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
