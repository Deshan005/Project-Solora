"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png"



const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    
    console.log("Password reset request for:", email);
    setSubmitted(true);
  };

  return (
    <>
      <style jsx>{`
        .forgot-password-bg {
          background: linear-gradient(90deg, #E7D8FB 0%, #FBF2F4 50%, #FFEADC 100%);
        }
      `}</style>
      
      <div className="min-h-screen flex items-center justify-center forgot-password-bg relative px-4 py-8">
        <div className="w-full max-w-md">
          {/* Forgot Password Card */}
          <div className="card w-full max-w-md space-y-6 mb-6">
            {/* Logo */}
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
            <p className="text-4xl text-black mt-8 font-cormorant">Forgot Password 🔒</p>
            </div>

            {!submitted ? (
              <>
                <p className="text-1xl font-roboto text-secondary text-center">
                  Enter your email and we&apos;ll send you<br/>instructions to reset your password</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input w-full"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full font-cormorant py-3 text-white hover:btn-primary">
                    <span className="text-lg">Sign in</span>
                  </button>
                </form>
                <Link 
                  href="/login" 
                  className="text-primary-color text-lg font-cormorant w-full hover:btn-primary block text-center"
                >
                  Back to Login
                </Link>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-600 text-sm">
                    Reset instructions sent to {email}. Please check your inbox.
                  </p>
                </div>
                
                <Link 
                  href="/login" 
                  className="btn-primary w-full py-3 text-white hover:btn-primary block text-center"
                >
                  Back to Sign in
                </Link>
              </div>
            )}

            {/* Demo info */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-secondary text-center">
                This is a demo password reset. No email will be sent.
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

export default ForgotPasswordPage;