import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
