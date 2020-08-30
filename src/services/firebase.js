import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBjqrj5hcUv1MIaQOkhsjUFKQ6F6cDQiPI',
  authDomain: 'my-super-unique-chat.firebaseapp.com',
  databaseURL: 'https://my-super-unique-chat.firebaseio.com',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
