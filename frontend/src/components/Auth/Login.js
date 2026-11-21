import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      setMessage({ type: 'success', text: 'You’re signed in. Welcome back.' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Unable to log in. Please try again.',
      });
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-intro">
        <p className="eyebrow"><span className="eyebrow__dot" />A warm welcome back</p>
        <h1>Your next stay is just around the corner.</h1>
        <p>Sign in to keep your plans close and your getaway in sight.</p>
      </section>

      <section className="auth-card">
        <p className="eyebrow"><span className="eyebrow__dot" />Your Haven account</p>
        <h2>Log in</h2>
        <p className="auth-card__description">Enter your details to continue.</p>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-card__footer">
            <button type="submit" className="button button--primary">Log in <span aria-hidden="true">→</span></button>
            <p className="auth-card__switch">New to Haven? <Link to="/register">Create an account</Link></p>
          </div>
          {message && (
            <div className={`message-panel message-panel--${message.type}`} role={message.type === 'error' ? 'alert' : 'status'}>
              {message.text}
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default Login;
