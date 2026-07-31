import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight, Info } from "lucide-react";

const EMPTY = { name: "", email: "", phone: "", password: "", confirm: "" };

export default function Auth() {
  const [mode, setMode] = useState("signin");   // "signin" | "register"
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isRegister = mode === "register";

  const switchMode = (next) => {
    setMode(next);
    setForm(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  const set = (key) => (e) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }));
    setErrors(prev => ({ ...prev, [key]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const next = {};

    if (isRegister && !form.name.trim()) next.name = "Please enter your full name.";

    if (!form.email.trim()) next.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";

    if (isRegister && !/^[0-9+\-\s]{10,15}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";

    if (!form.password) next.password = "Password is required.";
    else if (isRegister && form.password.length < 8)
      next.password = "Password must be at least 8 characters.";

    if (isRegister && form.confirm !== form.password)
      next.confirm = "Passwords do not match.";

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return (
    <main className="auth-page">
      <div className="auth-shell">

        {/* Tabs */}
        <div className="auth-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={!isRegister}
            className={!isRegister ? "auth-tab is-active" : "auth-tab"}
            onClick={() => switchMode("signin")}
          >
            Sign In
          </button>
          <button
            role="tab"
            aria-selected={isRegister}
            className={isRegister ? "auth-tab is-active" : "auth-tab"}
            onClick={() => switchMode("register")}
          >
            Register
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="auth-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="auth-title">{isRegister ? "Create Account" : "Sign In"}</h1>
            <p className="auth-sub">
              {isRegister
                ? "Join us for faster checkout and order tracking"
                : "Enter your credentials to continue"}
            </p>

            <form onSubmit={handleSubmit} noValidate>

              {isRegister && (
                <div className="auth-field">
                  <div className="auth-label-row">
                    <label className="auth-label" htmlFor="name">
                      Full Name <span className="auth-req">*</span>
                    </label>
                  </div>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon"><User size={16} /></span>
                    <input
                      id="name" className="auth-input" type="text"
                      placeholder="Your name"
                      value={form.name} onChange={set("name")}
                    />
                  </div>
                  {errors.name && <p className="auth-error">{errors.name}</p>}
                </div>
              )}

              <div className="auth-field">
                <div className="auth-label-row">
                  <label className="auth-label" htmlFor="email">
                    Email Address <span className="auth-req">*</span>
                  </label>
                </div>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon"><Mail size={16} /></span>
                  <input
                    id="email" className="auth-input" type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={form.email} onChange={set("email")}
                  />
                </div>
                {errors.email && <p className="auth-error">{errors.email}</p>}
              </div>

              {isRegister && (
                <div className="auth-field">
                  <div className="auth-label-row">
                    <label className="auth-label" htmlFor="phone">
                      Phone Number <span className="auth-req">*</span>
                    </label>
                  </div>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon"><Phone size={16} /></span>
                    <input
                      id="phone" className="auth-input" type="tel"
                      placeholder="03XX XXXXXXX"
                      value={form.phone} onChange={set("phone")}
                    />
                  </div>
                  {errors.phone && <p className="auth-error">{errors.phone}</p>}
                </div>
              )}

              <div className="auth-field">
                <div className="auth-label-row">
                  <label className="auth-label" htmlFor="password">
                    Password <span className="auth-req">*</span>
                  </label>
                  {!isRegister && (
                    <button type="button" className="auth-forgot">Forgot password?</button>
                  )}
                </div>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon"><Lock size={16} /></span>
                  <input
                    id="password"
                    className="auth-input has-toggle"
                    type={showPass ? "text" : "password"}
                    placeholder={isRegister ? "At least 8 characters" : "••••••••"}
                    autoComplete={isRegister ? "new-password" : "current-password"}
                    value={form.password} onChange={set("password")}
                  />
                  <button
                    type="button" className="auth-eye"
                    onClick={() => setShowPass(v => !v)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && <p className="auth-error">{errors.password}</p>}
              </div>

              {isRegister && (
                <div className="auth-field">
                  <div className="auth-label-row">
                    <label className="auth-label" htmlFor="confirm">
                      Confirm Password <span className="auth-req">*</span>
                    </label>
                  </div>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon"><Lock size={16} /></span>
                    <input
                      id="confirm"
                      className="auth-input has-toggle"
                      type={showConfirm ? "text" : "password"}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      value={form.confirm} onChange={set("confirm")}
                    />
                    <button
                      type="button" className="auth-eye"
                      onClick={() => setShowConfirm(v => !v)}
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.confirm && <p className="auth-error">{errors.confirm}</p>}
                </div>
              )}

              <button type="submit" className="auth-submit">
                {isRegister ? "Create Account" : "Sign In"} <ArrowRight size={16} />
              </button>
            </form>

            {submitted && (
              <div className="auth-demo">
                <Info size={16} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  Form looks good — but this is the UI only. No account system is
                  connected yet, so nothing was submitted or saved.
                </span>
              </div>
            )}

            <div className="auth-or"><span>Or continue with</span></div>

            <div className="auth-socials">
              <button type="button" className="auth-social">Google</button>
              <button type="button" className="auth-social">Facebook</button>
            </div>

            <p className="auth-switch">
              {isRegister ? "Already have an account? " : "Don't have an account? "}
              <button type="button" onClick={() => switchMode(isRegister ? "signin" : "register")}>
                {isRegister ? "Sign In" : "Register"}
              </button>
            </p>
          </motion.div>
        </AnimatePresence>

        <p className="auth-note">🔒 Your information is safe and encrypted</p>
      </div>
    </main>
  );
}
