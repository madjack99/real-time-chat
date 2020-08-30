import React, { useState } from 'react';

import { signInWithGoogle } from '../helpers/auth';

const LogIn = () => {
  const [error, setError] = useState(false);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      Please log in with Google, Log in
      <button onClick={handleSignIn}>Sign in with Google</button>
      {error && error}
    </div>
  );
};

export default LogIn;
