import { getCurrentUser, removeCurrentUser } from "@/features/auth/authStorage";
import type { User } from "@/features/auth/authTypes";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user: User = getCurrentUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    setTimeout(() => {
      removeCurrentUser();
      window.location.reload();
    }, 1000);
  };
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 pointer-events-none">
      <div 
        className={`max-w-7xl mx-auto pointer-events-auto rounded-2xl border border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 ${
          scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-gray-200/20" : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 rounded-xl focus:outline-none   overflow-hidden group p-2">
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src="./logo.png" alt="heritage_logo" className="w-full h-full object-contain" />
              </div>
              <div className="px-2">
                <span className="text-xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  Heritage
                </span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0 font-medium tracking-wide uppercase">Private School</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Biz haqimizda", "Dasturlar", "Imkoniyatlar", "Aloqa"].map((item, idx) => {
              const hash = ["#about", "#programs", "#facilities", "#contact"][idx];
              return (
                <Link
                  key={idx}
                  to={`/${hash}`}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-1 py-0.5"
                >
                  {item}
                </Link>
              );
            })}

            {user.fullName ? (
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer hover:ring-2 ring-emerald-500/50 transition-all duration-200">
                      <AvatarImage src="https://avatars.githubusercontent.com/u/89327572?v=4&size=64" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2" align="end">
                    <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="cursor-pointer">
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        To'lovlar
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={() => handleLogout()}>
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link to="/login" className="focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-full">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md cursor-pointer flex items-center gap-2">
                  Ro'yxatdan o'tish
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 border-t border-gray-100 dark:border-gray-800/50" : "max-h-0"}`}>
          <div className="px-4 py-4 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
            {["Biz haqimizda", "Dasturlar", "Imkoniyatlar", "Aloqa"].map((item, idx) => {
              const hash = ["#about", "#programs", "#facilities", "#contact"][idx];
              return (
                <Link
                  key={idx}
                  to={`/${hash}`}
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-4 py-3 rounded-xl transition-colors min-h-[44px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            {!user.fullName && (
              <div className="pt-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 cursor-pointer min-h-[44px]">
                    Ro'yxatdan o'tish
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
