"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Google icon
import ThemeButton from "@/components/SideBar/ThemeButton";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");
  const router = useRouter();

  // ✅ Hardcoded credentials
  const validCredentials = {
    email: "admin@test.com",
    password: "1234",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email === validCredentials.email && form.password === validCredentials.password) {
      // Save session (frontend only)
      localStorage.setItem("isAuthenticated", "true");

      // Optional: save remember me state
      if (form.remember) {
        localStorage.setItem("rememberEmail", form.email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // TODO: integrate Google Auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface1 relative px-4">
      {/* ✅ Theme Button top-right */}
      <div className="absolute top-4 right-4 z-50">
        <div className="p-2 rounded-full bg-surface2 shadow-md hover:scale-105 transition">
          <ThemeButton />
        </div>
      </div>

      {/* ✅ Login Card */}
      <div className="card w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">Welcome Back</h1>
        <p className="text-center text-secondary text-sm">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                className="accent-primary"
              />
              <span className="text-secondary">Remember me</span>
            </label>
            <Link href="/reset" className="text-primary-color hover:underline">
              Forgot password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn-primary w-full">Login</button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border-color"></div>
          <span className="text-xs text-tertiary">OR</span>
          <div className="flex-1 h-px bg-border-color"></div>
        </div>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-color rounded-lg py-2 hover:bg-surface3 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-primary">Login with Google</span>
        </button>

        <p className="text-sm text-center text-tertiary">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary-color hover:underline">
            Register
          </Link>
        <p>email : admin@test.com</p>
        <p>password : 1234</p>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
