const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f2efe9]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-5 lg:px-12">
        <div className="lg:col-span-2">
          <p className="text-3xl font-semibold tracking-tight">
            BLOOM<span className="text-yellow-500">SHOP</span>
          </p>
          <p className="mt-4 max-w-md text-slate-600">
            Discover unique products that inspire your lifestyle. Quality
            craftsmanship meets modern design.
          </p>
          <div className="mt-6 flex gap-3 text-sm text-slate-600">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Shop
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>All Products</li>
            <li>New Arrivals</li>
            <li>Sale</li>
            <li>Featured</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Customer Care
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Shipping Info</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© 2025 BloomShop™. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
