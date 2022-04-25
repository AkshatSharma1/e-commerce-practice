import React from "react";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// For redirect
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

// Sign up form componenet
import SignupFormComponent from "../../components/sign-up-form/signUp-form.component";
// Sign In form component
import SignInForm from "../../components/signIn-form/signIn-form.component";
import './authentication.style.scss'
const Authentication = () => {
  // useEffect for renering when page loads
  // useEffect(()=>{
  //     async function fetchData(){
  //         const res = await getRedirectResult(auth);

  //         if(res){
  //             const userDocRef = await createUserDocumentFromAuth(res.user);
  //         }
  //     }
  //     fetchData();
  // }, [])
  //or
  // useEffect(async ()=>{
  //     const res = await getRedirectResult(auth);
  //     if(res){
  //             const userDocRef = await createUserDocumentFromAuth(res.user);
  //     }
  // }, [])

  //Now implemented in signIn page
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // console.log(user);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleUser}>SignIn With Google Account</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>SignIn With Google Redirect</button> */}
      <SignInForm />
      <SignupFormComponent />
    </div>
  );
};

export default Authentication;
