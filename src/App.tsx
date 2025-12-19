import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./Layout/Layout";
import Auth from "./pages/auth/Auth";
import { useEffect } from "react";

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-green-50 to-teal-50">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}
