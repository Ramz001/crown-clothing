import { useState, ChangeEvent, FormEvent } from "react";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../features/user/user.slice";
import { SignInContainer, ButtonsContainerStyles } from "./sign-in.styles";
import FormInput from "../form-input/form-input.components";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useAppDispatch } from "../../utils/hooks/hooks";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart({ email, password }))
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error === "auth/wrong-password") {
        alert("Incorrect password!");
      }
      if (error === "auth/user-not-found") {
        alert("No user associated with this email!");
      }
      console.log("error signing in", error);
      setFormFields(defaultFormFields);
    }
  };

  const handleSignInWithGooglePopup = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <ButtonsContainerStyles>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleSignInWithGooglePopup}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainerStyles>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
