import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
  } from "firebase/auth";
  
  import { auth } from "@/lib/firebase/clientApp";
  
  export function onAuthStateChanged(cb) {
      return _onAuthStateChanged(auth, cb);
  }

  export async function registerUserByEmail(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // console.log("User created successfully");
      return { status: "success" };
    } catch (error) {
      // console.error("Error creating user", error);
      return { status: "error", message: mapErrorCodeToMessage(error.code) }
    }
  }

  export async function signInUserByEmail(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { status: "success" };
    }
    catch (error) {
      // console.error("Error signing in with email and password", error);
      return { status: "error", message: mapErrorCodeToMessage(error.code).message, button: mapErrorCodeToMessage(error.code).button}
    }
  }

  export async function resetUserPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      // console.log("Password reset email sent");
      return { status: "success" };
    } catch (error) {
      // console.error("Error sending password reset email", error);
      return { status: "error", message: mapErrorCodeToMessage(error.code).message}
    }
  }
  
  export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
  
    try {
      await signInWithPopup(auth, provider);
      console.log("Signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  }

  export const user = auth.currentUser;
  
  export async function signOut() {
    try {
      return auth.signOut();
    } catch (error) {
      // console.error("Error signing out", error);
    }
  }

 // function that takes an error code and returns 2 attributes, 'message' and 'button'
  export function mapErrorCodeToMessage(code) {
    const errorMap = {
      "auth/email-already-in-use": { message: "Email already in use", button: "login" },
      "auth/invalid-email": { message: "Invalid email", button: null },
      "auth/missing-password": { message: "Please enter a password", button: null },
      "auth/invalid-password": { message: "Invalid password", button: null },
      "auth/weak-password": { message: "Password is too weak", button: null },
      "auth/user-not-found": { message: "User with email address entered not found", button: "sign-up" },
      "auth/wrong-password": { message: "Wrong password", button: "forgot-password" }
    }
    return errorMap[code] || { message: "An error occurred", button: "Try again" };
  }