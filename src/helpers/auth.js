import { auth } from '../services/firebase';

export const signInWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};
