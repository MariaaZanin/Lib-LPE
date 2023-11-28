import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATTK8l4Dd-3AKF7BlqRhQciZTuZTBCnso",
    authDomain: "lib-lpe.firebaseapp.com",
    projectId: "lib-lpe",
    storageBucket: "lib-lpe.appspot.com",
    messagingSenderId: "486990773648",
    appId: "1:486990773648:web:d3e7e0cb617e5bd36c8715"
  };
  

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const githubAuthProvider = new GithubAuthProvider();
const signInWithGit = async () => {
  try {
    const res = await signInWithPopup(auth, githubAuthProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "github",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signInWithGit, logout };
