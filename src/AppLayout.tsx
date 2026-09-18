import App from "./App";
import Header from "./components/Header";
import Footer from "./footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f6f2] text-slate-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
