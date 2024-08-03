import React, { useState } from 'react';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';
import loginpic from './assets/hero image 2.png'; 

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await login(email, password);
      if (result.role) {
        onLogin(result);
        navigate(result.role === 'admin' ? '/admin/ahomepage' : '/user/homepage');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred while logging in');
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.imageContainer}>
          <img src={loginpic} alt="Login Illustration" style={styles.image} />
        </div>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Login</h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={styles.input}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={styles.input}
            />
            <br />
            <button type="submit" style={styles.button}>Login</button>
          </form>
          {error && <div style={styles.error}>{error}</div>}
        </div>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f1e9',
    fontFamily: 'Arial, sans-serif',
  },
  loginBox: {
    display: 'flex',
    width: '800px',
    height: '400px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: 1,

  },
  image: {
    width: '70%',
    height: '90%',
    objectFit: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '10px',
    color: 'red',
  },
};

export default LoginPage;
