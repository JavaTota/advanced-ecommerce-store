import { useState, type FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile, deleteUser } from "firebase/auth";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase/firebase";
import styles from "../styles/auth-styles";

function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user?.displayName || "");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setError("No user is logged in.");
      return;
    }

    try {
      await updateProfile(user, { displayName: name });

      await updateDoc(doc(db, "users", user.uid), {
        name,
        address,
      });

      setMessage("Profile updated successfully.");
      setError("");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile.");
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) {
      setError("No user is logged in.");
      return;
    }

    try {
      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);

      setMessage("Account deleted successfully.");
      setError("");
    } catch (error) {
      console.error("Error deleting account:", error);
      setError("Failed to delete account. Please log in again and retry.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Profile</h2>

        {message && <p>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleUpdateProfile} style={styles.form}>
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
            value={user?.email || ""}
            disabled
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button style={styles.button} type="submit">
            Update Profile
          </button>
        </form>

        <button
          style={{
            ...styles.button,
            marginTop: "1rem",
            backgroundColor: "#dc2626",
          }}
          type="button"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Profile;