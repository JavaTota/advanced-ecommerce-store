import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase/firebase";

export const getUserProfile = async (uid: string) => {
    const snapshot = await getDoc(doc(db, "users", uid));

    return snapshot.data();
};

export const updateUserProfile = async (
    uid: string,
    data: {
        name: string;
        address: string;
    }
) => {
    await updateDoc(doc(db, "users", uid), data);
};

export const deleteUserProfile = async (uid: string) => {
    await deleteDoc(doc(db, "users", uid));
};