"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

type Props = {
  type: "login" | "signup";
};

export default function AuthForm({ type }: Props) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (type === "signup") {
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { full_name: form.name },
        },
      });

      setLoading(false);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Account created successfully!");
      router.push("/login");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      setLoading(false);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Logged in successfully!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-10 space-y-6 transition-all"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            {type === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-gray-500">
            {type === "login"
              ? "Login to continue your journey"
              : "Sign up to start booking rides"}
          </p>
        </div>

        {type === "signup" && (
          <div>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
            />
          </div>
        )}

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : type === "login" ? (
            "Login"
          ) : (
            "Create Account"
          )}
        </button>

        <div className="relative text-center text-sm text-gray-400">
          <span className="bg-white px-3 relative z-10">
            {type === "login" ? "New here?" : "Already registered?"}
          </span>
          <div className="absolute left-0 top-1/2 w-full border-t border-gray-200 -z-0"></div>
        </div>

        <p className="text-center text-sm text-gray-600">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => router.push("/signup")}
                className="font-medium text-black hover:underline cursor-pointer transition"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => router.push("/login")}
                className="font-medium text-black hover:underline cursor-pointer transition"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
