import SignInForm from "../../components/sign-in/sign-in-form.component";

import "./sign-in.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
