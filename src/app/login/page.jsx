"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaLock,
  FaUser,
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaMicrosoft,
} from "react-icons/fa";
import styles from "./login.module.css";
import SocialAuth from "@/components/auth/SocialAuth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    setIsLoading(true);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const normalizedEmail = formData.email.toLowerCase().trim();

      const res = await signIn("credentials", {
        email: normalizedEmail,
        password: formData.password,
        redirect: false,
      });

      console.log("SignIn response:", res); // Add logging

      if (res?.error) {
        setErrors("Invalid Credentials");
        return;
      }

      // Check if response is ok before redirecting
      if (res?.ok) {
        // Simulate login process
        setTimeout(() => {
          setIsLoading(false);
          alert("Login successful! Redirecting to dashboard...");
          router.push("/profile");
        }, 1500);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>Tech</span>
            <span className={styles.logoAccent}>Academy</span>
          </Link>
          <h1 className={styles.title}>Welcome Back!</h1>
          <p className={styles.subtitle}>
            Sign in to continue your learning journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.error : ""}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${
                errors.password ? styles.error : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password}</p>
            )}
          </div>

          <div className={styles.remember}>
            <label className={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <span className={styles.checkmark}></span>
              Remember me
            </label>
            <a href="/forgot-password" className={styles.forgotLink}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className={styles.spinner}></div>
            ) : (
              <>
                <FaLock className={styles.lockIcon} /> Sign In
              </>
            )}
          </button>

          <div className={styles.links}>
            <p className={styles.text}>
              Don't have an account?{" "}
              <Link href="/register" className={styles.link}>
                Sign up
              </Link>
            </p>
          </div>
        </form>

        <div className={styles.divider}>
          <span>Or continue with</span>
        </div>

        <SocialAuth />
      </div>

      <div className={styles.illustration}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.card}>
          <h3>Unlock Your Potential</h3>
          <p>Continue your journey to becoming a tech expert</p>
        </div>
      </div>
    </div>
  );
}
