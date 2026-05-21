import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

const [formData, setFormData] = useState({
    email: '',
    password: ''
});

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    // Handle auth logic here
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              <a href="#forgot" className="forgot-password">Forgot?</a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
}