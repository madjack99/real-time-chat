import React from 'react';
import { signOut } from '../helpers/auth';

const Chat = () => {
  return (
    <div>
      Chat
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Chat;
