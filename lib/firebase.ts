import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//connects app to the cloud
const firebaseConfig = {
  apiKey: "AIzaSyAcon_mGwLXkSuoDWMtCxbhnmxpx4Tzpa8",
  authDomain: "marcosnextfireblog.firebaseapp.com",
  projectId: "marcosnextfireblog",
  storageBucket: "marcosnextfireblog.appspot.com",
  messagingSenderId: "540744487548",
  appId: "1:540744487548:web:ccb9ab8223cf72589a2ff9",
  measurementId: "G-RQZVQWHK6S",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
