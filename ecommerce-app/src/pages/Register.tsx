import {useState} from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';
import styles from '../styles/auth-styles';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate()

const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });

    setSuccess("Account created successfully!");

    navigate("/profile");
  } catch (error) {

    console.error(error);
  }
};

return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Register
        </button>
      </form>
    </div>
  </div>
);
}

export default Register