"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png"

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");
  const router = useRouter();

  const validCredentials = {
    email: "admin@test.com",
    password: "1234",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email === validCredentials.email && form.password === validCredentials.password) {
      localStorage.setItem("isAuthenticated", "true");
      if (form.remember) {
        localStorage.setItem("rememberEmail", form.email);
      } else {
        localStorage.removeItem("rememberEmail");
      }
      router.push("/homepage");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  return (
    <>
      <style jsx>{`
        .login-bg {
          background: linear-gradient(90deg, #E7D8FB 0%, #FBF2F4 50%, #FFEADC 100%);
        }
      `}</style>
      
      <div className="min-h-screen flex items-center justify-center login-bg relative px-4 py-8">
        {/* Theme Button top-right */}
        <div className="absolute top-4 right-4 z-50">
          <div className="p-2 rounded-full bg-white shadow-md hover:scale-105 transition">
          </div>
        </div>

        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="card w-full max-w-md space-y-6 mb-6">
            {/* Logo - Cormorant Garamond */}
            <div className="text-center">
            <div className="flex items-center justify-center mt-4">
                <Image
                src={logo}
                alt="Frezka Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
              <p className="text-3xl text-black font-cormorant mt-10">Welcome back</p>
              <p className="text-sm mt-2 text-tertiary font-roboto">Ready to elevate your business</p>
            </div>

            {/* Google Button - Poppins */}
            <button
              onClick={handleGoogleLogin}
              className="w-full h-10 flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition font-poppins"
            >
              <FcGoogle size={18} />
              <span className="text-black font-medium">Continue with Google</span>
            </button>

            {/* Divider - Poppins */}
            <div className="flex items-center gap-3 font-poppins">
              <div className="flex-1 h-px bg-border-color"></div>
              <span className="text-sm text-tertiary font-poppins">Or Sign in with email</span>
              <div className="flex-1 h-px bg-border-color"></div>
            </div>

            {/* Login Form - Labels: Poppins, Inputs: Roboto */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2 font-poppins">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input w-full font-roboto"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2 font-poppins">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="input w-full font-roboto"
                  required
                />
              </div>

              {/* Remember me + Forgot password - Poppins */}
              <div className="flex items-center justify-between text-sm font-poppins">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                    className="accent-primary"
                  />
                  <span className="text-secondary">Remember me</span>
                </label>
                <Link href="/reset" className="text-primary-color hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>

              {error && <p className="text-red-500 text-sm font-poppins">{error}</p>}

              {/* Sign in button - Cormorant Garamond */}
              <button type="submit" className="btn-primary w-full py-3 text-white hover:btn-primary font-cormorant font-semibold text-lg">
                Sign in →
              </button>
            </form>

            {/* Sign up link - Poppins */}
            <p className="text-sm text-center text-tertiary font-poppins">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary-color hover:underline font-medium">
                Sign up
              </Link>
            </p>

            {/* Demo credentials - Roboto */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-secondary text-center font-roboto">
                Demo credentials: admin@test.com / 1234
              </p>
            </div>
          </div>

          {/* Copyright text - Roboto */}
          <div className="text-center">
            <p className="text-sm text-gray-600 font-roboto">
              © 2025 SOLORA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;