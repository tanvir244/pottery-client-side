import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkOD4suwJ_aBvHbOGFDcNpgfAZm9RGEaM",
  authDomain: "ceramics-and-pottery-auth.firebaseapp.com",
  projectId: "ceramics-and-pottery-auth",
  storageBucket: "ceramics-and-pottery-auth.appspot.com",
  messagingSenderId: "611928468769",
  appId: "1:611928468769:web:3d567f852407f8cb386260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;