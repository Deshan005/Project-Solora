"use client";

import { useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setSubmitted(true);
    // TODO: integrate API to send reset email
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface1">
      <div className="card w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">Forgot Password?</h1>
        <p className="text-center text-secondary text-sm">
          Enter your email and we’ll send you reset instructions.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              required
            />
            <button type="submit" className="btn-primary w-full">
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-500 text-sm">
              ✅ Reset link sent! Please check your inbox.
            </p>
          </div>
        )}

        <p className="text-sm text-center text-tertiary">
          Remember your password?{" "}
          <Link href="/login" className="text-primary-color hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
