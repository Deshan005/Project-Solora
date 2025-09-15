"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import ThemeButton from "@/components/SideBar/ThemeButton";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }
    
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    console.log("Register:", form);
    setError("");
    setSuccess("Registration successful! You can now login.");
    
    // Clear form after successful registration
    setForm({ name: "", email: "", password: "" });
    
    // TODO: integrate API
  };

  const handleGoogleRegister = () => {
    console.log("Google Register Clicked");
    // TODO: integrate Google Auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface1 relative px-4 py-8">
      {/* Theme Button top-right */}
      <div className="absolute top-4 right-4 z-50">
        <div className="p-2 rounded-full bg-surface2 shadow-md hover:scale-105 transition">
          <ThemeButton />
        </div>
      </div>

      <div className="card w-full max-w-md space-y-6 p-6 lg:p-8">
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-sm lg:text-base text-secondary">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input w-full"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input w-full"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password (min. 6 characters)"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input w-full"
              required
              minLength={6}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-600 text-sm">{success}</p>
            </div>
          )}

          <button 
            type="submit" 
            className="btn-primary w-full py-3 text-base lg:text-lg font-medium"
          >
            Create Account
          </button>
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
          className="w-full flex items-center justify-center gap-3 border border-color rounded-lg py-3 hover:bg-surface3 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-primary">Sign up with Google</span>
        </button>

        <div className="text-center">
          <p className="text-sm text-tertiary">
            Already have an account?{" "}
            <Link 
              href="/login" 
              className="text-primary-color hover:underline font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Demo info */}
        <div className="mt-6 p-4 bg-surface2 rounded-lg border border-color">
          <h3 className="text-sm font-medium text-primary mb-2">Demo Information:</h3>
          <p className="text-xs text-secondary">This is a demo registration. No actual account will be created.</p>
          <p className="text-xs text-secondary mt-1">For a working demo, use the login page with:</p>
          <p className="text-xs text-secondary">Email: admin@test.com</p>
          <p className="text-xs text-secondary">Password: 1234</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;