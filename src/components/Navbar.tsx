import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

{
  /* Navigation */
}
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-14 h-14  flex items-center justify-center">
                {/* <GraduationCap className="w-8 h-8 text-white" /> */}
                <img src="./logo.png" alt="heritage_logo" />
              </div>
              {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div> */}
              <div>
                <span className="text-2xl font-bold text-[#33cd83] bg-clip-text">
                  Heritage
                </span>
                <p className="text-xs text-gray-600 mt-0.5">Private School</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/#about"
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Biz haqimizda
            </Link>
            <Link
              to="/#programs"
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Dasturlar
            </Link>
            <Link
              to="/#facilities"
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Imkoniyatlar
            </Link>
            <Link
              to="/#contact"
              className="text-gray-700 hover:text-emerald-600 transition font-medium"
            >
              Aloqa
            </Link>
            <Link to="login">
              <button className="bg-linear-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition transform hover:scale-105 font-semibold cursor-pointer">
                Ro'yxatdan o'tish
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/#about"
              className="block text-gray-700 hover:text-emerald-600 py-2"
            >
              Biz haqimizda
            </Link>
            <Link
              to="/#programs"
              className="block text-gray-700 hover:text-emerald-600 py-2"
            >
              Dasturlar
            </Link>
            <Link
              to="/#facilities"
              className="block text-gray-700 hover:text-emerald-600 py-2"
            >
              Imkoniyatlar
            </Link>
            <Link
              to="/#contact"
              className="block text-gray-700 hover:text-emerald-600 py-2"
            >
              Aloqa
            </Link>
            <Link to="login">
              <button className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer">
                Ro'yxatdan o'tish
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
