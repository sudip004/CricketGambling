import React, { useState, } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      },{ withCredentials: true });
      console.log('Logged in successfully!');
    // const { token } = response.data; // Extract token from response
    // console.log("client",token);
    console.log(response.data);
    
    // Save token to localStorage
    // localStorage.setItem('authToken', token);
    
    // Navigate to the next page
    navigate('/p');
    } catch (error) {
        console.log('Error: ' + error.response?.data || error.message);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Password:</label>
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
    </form>
  );
};

export default Login;
