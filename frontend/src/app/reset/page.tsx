"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import ThemeButton from "@/components/SideBar/ThemeButton";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    console.log("Password reset request for:", email);
    setError("");
    setSuccess("Reset link sent! Please check your inbox.");
    setSubmitted(true);
    
    // TODO: integrate API to send reset email
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
          <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-2">Forgot Password?</h1>
          <p className="text-sm lg:text-base text-secondary">
            Enter your email and we'll send you reset instructions.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary w-full py-3 text-base lg:text-lg font-medium"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-600 text-sm">{success}</p>
            </div>
          </div>
        )}

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
            Remember your password?{" "}
            <Link 
              href="/login" 
              className="text-primary-color hover:underline font-medium"
            >
              Back to Login
            </Link>
          </p>
        </div>

        {/* Demo info */}
        <div className="mt-6 p-4 bg-surface2 rounded-lg border border-color">
          <h3 className="text-sm font-medium text-primary mb-2">Demo Information:</h3>
          <p className="text-xs text-secondary">This is a demo password reset. No email will actually be sent.</p>
          <p className="text-xs text-secondary mt-1">For a working demo, use the login page with:</p>
          <p className="text-xs text-secondary">Email: admin@test.com</p>
          <p className="text-xs text-secondary">Password: 1234</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;