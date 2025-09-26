"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    password: "",
    agree: false
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }
    
    if (!form.agree) {
      setError("Please agree to the Privacy Policy and Terms & Conditions");
      return;
    }
    
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    console.log("Register:", form);
    setError("");
  };

  const handleGoogleRegister = () => {
    console.log("Google Register Clicked");
  };

  return (
    <>
      <style jsx>{`
        .register-bg {
          background: linear-gradient(90deg, #E7D8FB 0%, #FBF2F4 50%, #FFEADC 100%);
        }
      `}</style>
      
      <div className="min-h-screen flex items-center justify-center register-bg relative px-4 py-8">
        <div className="w-full max-w-md">
          {/* Register Card */}
          <div className="card w-full max-w-md space-y-6 mb-6">
            {/* Logo */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary mb-2">SQRA</h1>
              <p className="text-lg text-secondary">Start your journey</p>
              <p className="text-sm text-tertiary">Build the business you envision</p>
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogleRegister}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} />
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-border-color"></div>
              <span className="text-xs text-tertiary">Or Sign up with email</span>
              <div className="flex-1 h-px bg-border-color"></div>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="input w-full"
                  required
                  minLength={6}
                />
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                  className="mt-1 accent-primary"
                />
                <label className="text-sm text-secondary">
                  I agree to the <span className="text-primary-color font-medium">Privacy policy</span> and <span className="text-primary-color font-medium">Terms & Conditions</span>
                </label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button type="submit" className="btn-primary w-full py-3 text-white hover:btn-primary">
                Sign up →
              </button>
            </form>

            <p className="text-sm text-center text-tertiary">
              Already have an account?{" "}
              <Link href="/login" className="text-primary-color hover:underline font-medium">
                Sign in
              </Link>
            </p>

            {/* Demo info */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-secondary text-center">
                This is a demo registration. Use login page for working demo.
              </p>
            </div>
          </div>

          {/* Copyright text */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2025 SOLORA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;