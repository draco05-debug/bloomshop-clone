import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f8f6f2] px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Begin Your <span className="text-[#f5c518]">BLOOM</span>SHOP Journey
        </h1>

        <form className="mt-6 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-[#f5c518]"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-[#f5c518]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#f5c518] px-5 py-3 font-semibold text-slate-900 transition hover:bg-[#e6b800]"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          Forgot{" "}
          <Link
            to="/password"
            className="ml-1 font-medium text-[#f5c518] hover:text-[#e6b800]"
          >
            Password?
          </Link>
        </div>

        <div className="mt-3 text-sm text-slate-600">
          Don't have an account?
          <Link
            to="/sign-up"
            className="ml-2 font-medium text-[#f5c518] hover:text-[#e6b800]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
