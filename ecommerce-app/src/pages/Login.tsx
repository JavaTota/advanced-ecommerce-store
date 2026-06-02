import {useState, useEffect} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import styles from '../styles/auth-styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

const {user} = useAuth();

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
      console.error('Error logging in user:', error);
    }
  };

return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
);
}

export default Login