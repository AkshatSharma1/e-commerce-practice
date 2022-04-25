import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInputComponent from "../form-input/form-input.component";
import './signUp-form.styles.scss'
import Button from "../buttonComponent/button.component";

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupFormComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields; //destructing

  //no need after onAuthChanged
  // const {setCurrentUser} = useContext(UserContext);
//   console.log(formFields);
  // Function to update changes when the form fields are updated
  const handleChange = (event) => {
    const { name, value } = event.target; //get name and value form event

    //set the values
    // take same values from prev one using spread and now get the updated values(here name)
    setFormFields({ ...formFields, [name]: value });
  };

  // reset form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //on submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //first check whether the passowrd and confirm password matches
    if (password !== confirmPassword) {
      alert("Passwords donot match");
      return;
    }

    //else
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(res)
      //this state changes are now taken care by onAuthChange
      // setCurrentUser(user)

      await createUserDocumentFromAuth(user, { name });
      resetFormFields();
    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert("Email already in use.")
        }
        else{
            console.log("Error creating a user", error);
        }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your Email and Pasword</span>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <FormInputComponent
          label="Name"
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />

        <FormInputComponent
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInputComponent
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <FormInputComponent
          label="ConfirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupFormComponent;
