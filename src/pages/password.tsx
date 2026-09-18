import { Link } from "react-router";

const Password = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f8f6f2] px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Reset Your <span className="text-[#f5c518]">BLOOM</span>SHOP Password
        </h1>

        <p className="mt-4 text-slate-600">
          Enter your email address and we’ll send you a reset link.
        </p>

        <form className="mt-6 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-[#f5c518]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#f5c518] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[#e6b800]"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Remember your password?
          <Link
            to="/sign-in"
            className="ml-2 font-medium text-[#f5c518] hover:text-[#e6b800]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Password;
