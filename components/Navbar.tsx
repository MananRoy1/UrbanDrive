"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      console.log(session?.user);
      setLoading(false);
    });

    // get user role
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single()
          .then(({ data }) => {
            setRole(data?.role);
          });
      }
    });

    // Listen for auth changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    router.push("/");
  };

  const fullName = user?.user_metadata?.full_name as string | undefined;

  const firstLetter = fullName?.split(" ").at(0)?.at(0)?.toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-[70%] bg-white/70 mx-auto mt-4 mx rounded-3xl dark:bg-[#231c0f]/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#fea90b] rounded-lg flex items-center justify-center text-[#231c0f]">
                <span className="material-symbols-outlined text-[20px]">
                  directions_car
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                UrbanDrive
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            <Link
              href="/cars"
              className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
            >
              All Cars
            </Link>
            {/* <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
            >
              Locations
            </Link> */}
            {user && role === "admin" ? (
              <Link
                href="/admin/dashboard"
                className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
              >
                Admin Dashboard
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Auth Buttons */}
          {!user ? (
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#fea90b] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#fea90b] hover:bg-amber-400 text-gray-900 font-bold py-2.5 px-6 rounded-full text-sm transition-all transform hover:scale-105 shadow-lg shadow-[#fea90b]/20"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <p className="text-sm font-semibold">{fullName}</p>
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white font-bold">
                {firstLetter}
              </div>
              <button
                onClick={handleLogout}
                className="bg-[#fea90b] hover:bg-amber-400 text-gray-900 font-bold py-2.5 px-6 rounded-full text-sm transition-all transform hover:scale-105 shadow-lg shadow-[#fea90b]/20"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#231c0f] border-t border-gray-100 dark:border-gray-800 px-4 py-6">
          <nav className="flex flex-col gap-4 mb-6">
            <Link
              href="/cars"
              className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
            >
              All Cars
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
            >
              Locations
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#fea90b] dark:text-gray-300 dark:hover:text-[#fea90b] transition-colors"
            >
              How it Works
            </Link>
          </nav>
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#fea90b] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#fea90b] hover:bg-amber-400 text-gray-900 font-bold py-2.5 px-6 rounded-full text-sm transition-all w-full"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
