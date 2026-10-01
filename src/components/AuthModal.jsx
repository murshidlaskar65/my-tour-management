import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  LogIn,
  UserPlus
} from 'lucide-react';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  onLoginSuccess, 
  initialMode = 'signup' 
}) {
  const [mode, setMode] = useState(initialMode); // 'signin' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Sync mode whenever modal opens or initialMode changes
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode || 'signup');
      setFormError('');
    }
  }, [isOpen, initialMode]);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Real-Time Password Validation Rules (as requested by user)
  // 1. 1st letter must be Capital
  const isFirstLetterCapital = /^[A-Z]/.test(password);
  // 2. Must contain at least one digit
  const hasDigit = /[0-9]/.test(password);
  // 3. Minimum 8 characters
  const isMinEightChars = password.length >= 8;

  const isPasswordValid = isFirstLetterCapital && hasDigit && isMinEightChars;

  // Google Login Simulation
  const handleGoogleSignIn = () => {
    setIsSubmitting(true);
    setFormError('');

    setTimeout(() => {
      setIsSubmitting(false);
      const googleUser = {
        id: `google-${Math.floor(100000 + Math.random() * 900000)}`,
        name: 'Alex Mercer',
        email: 'alex.mercer.voyage@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        provider: 'google',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      onLoginSuccess(googleUser);
      onClose();
    }, 900);
  };

  // Submit standard Email/Password
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (mode === 'signup') {
      if (!fullName.trim() || fullName.trim().length < 3) {
        setFormError('Full name must be at least 3 characters.');
        return;
      }

      if (!isPasswordValid) {
        setFormError('Password must meet all 3 security requirements below.');
        return;
      }

      if (password !== confirmPassword) {
        setFormError('Passwords do not match.');
        return;
      }
    } else {
      // Sign In mode
      if (!password) {
        setFormError('Please enter your password.');
        return;
      }
      if (!isPasswordValid) {
        setFormError('Invalid password format. 1st letter must be capital, contain a number, and be at least 8 characters.');
        return;
      }
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      const user = {
        id: `usr-${Math.floor(10000 + Math.random() * 90000)}`,
        name: mode === 'signup' ? fullName.trim() : email.split('@')[0],
        email: email.trim(),
        avatar: null,
        provider: 'email',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}

      onLoginSuccess(user);
      onClose();
    }, 800);
  };

  return (
    <div className="modal-overlay auth-modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="auth-header">
          <div className="auth-badge">
            <Sparkles size={14} className="text-gold" />
            <span>VoyagePulse VIP Access</span>
          </div>
          <h2 className="auth-title">
            {mode === 'signin' ? 'Welcome' : 'Create an'} <span className="gradient-text">{mode === 'signin' ? 'Back' : 'Account'}</span>
          </h2>
          <p className="auth-subtitle">
            {mode === 'signin' 
              ? 'Access your luxury bookings, digital vouchers, and bespoke itineraries.' 
              : 'Sign up to unlock exclusive tour packages, price alerts, and instant travel passes.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="auth-tabs-row">
          <button
            type="button"
            className={`auth-tab-btn ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => {
              setMode('signin');
              setFormError('');
            }}
          >
            <LogIn size={15} />
            <span>Sign In</span>
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setMode('signup');
              setFormError('');
            }}
          >
            <UserPlus size={15} />
            <span>Sign Up</span>
          </button>
        </div>

        {/* Google One-Click Button */}
        <div className="auth-social-section">
          <button
            type="button"
            className="btn-google-auth"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
          >
            {/* Google Multi-Color SVG Icon */}
            <svg className="google-svg-icon" viewBox="0 0 24 24" width="20" height="20">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="auth-divider">
          <span>or continue with email</span>
        </div>

        {/* Error Notification */}
        {formError && (
          <div className="auth-error-banner">
            <XCircle size={16} className="text-rose" />
            <span>{formError}</span>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Full Name for Sign Up */}
          {mode === 'signup' && (
            <div className="auth-input-group">
              <label className="auth-label">
                <User size={14} className="text-cyan" /> Full Name
              </label>
              <div className="auth-input-wrap">
                <input
                  type="text"
                  placeholder="e.g. Tanvir Ahmed"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
            </div>
          )}

          {/* Email Address */}
          <div className="auth-input-group">
            <label className="auth-label">
              <Mail size={14} className="text-cyan" /> Email Address
            </label>
            <div className="auth-input-wrap">
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
                required
              />
            </div>
          </div>

          {/* Password with Exact 3-Rule Real-Time Validation */}
          <div className="auth-input-group">
            <div className="password-label-row">
              <label className="auth-label">
                <Lock size={14} className="text-gold" /> Password
              </label>
              {mode === 'signin' && (
                <button 
                  type="button" 
                  className="forgot-link"
                  onClick={() => alert('Password reset link sent to your registered email.')}
                >
                  Forgot password?
                </button>
              )}
            </div>

            <div className="auth-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter strong password (e.g. Traveler123)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* REAL-TIME VALIDATION RULES DISPLAY */}
            {password.length > 0 && (
              <div className="password-rules-box">
                <span className="rules-header">Security Requirements:</span>
                <div className="rules-list">
                  {/* Condition 1: 1st Letter Capital */}
                  <div className={`rule-item ${isFirstLetterCapital ? 'valid' : 'invalid'}`}>
                    {isFirstLetterCapital ? (
                      <CheckCircle2 size={14} className="text-emerald" />
                    ) : (
                      <XCircle size={14} className="text-rose" />
                    )}
                    <span>1st letter must be <strong>Capital</strong> (A-Z)</span>
                  </div>

                  {/* Condition 2: Must be at least one digit */}
                  <div className={`rule-item ${hasDigit ? 'valid' : 'invalid'}`}>
                    {hasDigit ? (
                      <CheckCircle2 size={14} className="text-emerald" />
                    ) : (
                      <XCircle size={14} className="text-rose" />
                    )}
                    <span>Must contain at least <strong>1 digit</strong> (0-9)</span>
                  </div>

                  {/* Condition 3: At least 8 characters */}
                  <div className={`rule-item ${isMinEightChars ? 'valid' : 'invalid'}`}>
                    {isMinEightChars ? (
                      <CheckCircle2 size={14} className="text-emerald" />
                    ) : (
                      <XCircle size={14} className="text-rose" />
                    )}
                    <span>At least <strong>8 characters</strong> ({password.length}/8)</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password (Sign Up only) */}
          {mode === 'signup' && (
            <div className="auth-input-group">
              <label className="auth-label">
                <ShieldCheck size={14} className="text-gold" /> Confirm Password
              </label>
              <div className="auth-input-wrap">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-type your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="auth-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {confirmPassword.length > 0 && password !== confirmPassword && (
                <span className="password-mismatch-note">Passwords do not match</span>
              )}
            </div>
          )}

          {/* Remember Me / Terms */}
          <div className="auth-options-row">
            <label className="remember-checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="custom-checkbox"
              />
              <span>Remember this browser for 30 days</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary btn-auth-submit"
            disabled={isSubmitting || (mode === 'signup' && !isPasswordValid)}
          >
            {isSubmitting ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>{mode === 'signin' ? 'Sign In to Account' : 'Create VIP Account'}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Prompt */}
        <div className="auth-footer-prompt">
          {mode === 'signin' ? (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                className="switch-mode-link"
                onClick={() => {
                  setMode('signup');
                  setFormError('');
                }}
              >
                Sign Up for Free
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                className="switch-mode-link"
                onClick={() => {
                  setMode('signin');
                  setFormError('');
                }}
              >
                Sign In
              </button>
            </p>
          )}

          {/* Quick guest pass link to browse the website */}
          <div className="auth-guest-option">
            <button
              type="button"
              className="auth-guest-btn"
              onClick={onClose}
              title="Explore tours and website as a guest"
            >
              Explore Tours as Guest First →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
