// initializeApp function for reference



import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { useNavigate } from "react-router-dom";

// Authentication function
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// Database firestore: 3 fold structure = folder->document->data
import { getFirestore, doc, getDoc,getDocs, setDoc, collection, writeBatch, query } from "firebase/firestore";
// import { Navigate } from "react-router-dom";
// import { async } from "@firebase/util";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe_oh5xcJQkU1dNhLGIOlNUtWJ90nfD3U",
  authDomain: "clothing-db-9a590.firebaseapp.com",
  projectId: "clothing-db-9a590",
  storageBucket: "clothing-db-9a590.appspot.com",
  messagingSenderId: "973212151854",
  appId: "1:973212151854:web:6bc6cddae4dc92f964afbf",
  measurementId: "G-N0B6W50J58",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

//   Setting a provider(actor): different types of authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// with redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// Setting database
export const db = getFirestore();

// setting collections and docs
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  // 'users'->collections

  if(!userAuth) return;
  
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef)

  // Get the document(data)-> shows the data of the user present inside the database
  // Condition: if the user exists in db
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    // if user does not exists, then set the data with data from userAuth
    const { displayName, email } = userAuth;
    const dateOfCreation = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        dateOfCreation,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("Error creating the user", err.message);
    }
  }
  return userDocRef;
};

//protecting code from destruction/ loss
export const createAuthUserWithEmailAndPassword = async (email, password)=>{

  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

// Sign out
export const signOutUser = ()=> 
{
  signOut(auth);
}

// Keeping check on the auth state change
export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth, callback);
// This will call whenver user logs in and logs out