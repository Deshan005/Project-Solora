"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", form);
    // TODO: integrate API
  };

  const handleGoogleRegister = () => {
    console.log("Google Register Clicked");
    // TODO: integrate Google Auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface1">
      <div className="card w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">Create Account</h1>
        <p className="text-center text-secondary text-sm">Sign up to get started</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="input w-full"
            required
          />
          <button type="submit" className="btn-primary w-full">Register</button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border-color"></div>
          <span className="text-xs text-tertiary">OR</span>
          <div className="flex-1 h-px bg-border-color"></div>
        </div>

        {/* Google register */}
        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-2 border border-color rounded-lg py-2 hover:bg-surface3 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-primary">Register with Google</span>
        </button>

        <p className="text-sm text-center text-tertiary">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-color hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
