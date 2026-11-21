import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/authService';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, email, password });
      setMessage({ type: 'success', text: 'Your account is ready. You can log in now.' });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Unable to register. Please try again.',
      });
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-intro">
        <p className="eyebrow"><span className="eyebrow__dot" />Make yourself at home</p>
        <h1>Good trips begin with a little room.</h1>
        <p>Create an account to start planning the stay you’ve been looking forward to.</p>
      </section>

      <section className="auth-card">
        <p className="eyebrow"><span className="eyebrow__dot" />Join Haven</p>
        <h2>Create account</h2>
        <p className="auth-card__description">A few details and you’re on your way.</p>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder="Full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              autoComplete="new-password"
              minLength={6}
              placeholder="At least 6 characters"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-card__footer">
            <button type="submit" className="button button--primary">Create account <span aria-hidden="true">→</span></button>
            <p className="auth-card__switch">Already have an account? <Link to="/login">Log in</Link></p>
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

export default Register;
