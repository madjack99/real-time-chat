import { auth } from '../services/firebase';

/**
 * Handle sign in logic with pop up google window
 * and google firebase services
 */
export const signInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};

/**
 * Handle sign out logic with google firebase services
 */
export const signOut = () => {
  return auth().signOut();
};
