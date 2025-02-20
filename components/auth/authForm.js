import Link from "next/link";
import EmailField from "../generics/form/emailField";
import PasswordField from "../generics/form/passwordField";
import TextField from "../generics/form/textField";

export default function LoginForm({ classes, mode }) {
  console.log(mode);
  const displayHeader =
    mode == "signUp" ? (
      <h1 className={classes["auth-form-header"]}>Sign Up For Account</h1>
    ) : (
      <h1 className={classes["auth-form-header"]}>Log into Account</h1>
    );

  const displayMsg =
    mode == "signUp" ? (
      <p>
        Got an account? Click here to{" "}
        <span>
          <Link href="/auth?mode=login">login</Link>
        </span>
      </p>
    ) : (
      <p>
        No account? Click here to{" "}
        <span>
          <Link href="/auth?mode=signUp">sign up</Link>
        </span>
      </p>
    );
  return (
    <form classes={classes["auth-form"]}>
      <fieldset classes={classes["auth-fields"]}>
        {displayHeader}
        {mode == "signUp" ? (
          <TextField
            fieldClassName={classes["auth-field"]}
            name="signUpCode"
            label="Sign Up Code"
          />
        ) : null}
        <EmailField
          fieldClassName={classes["auth-field"]}
          name="email"
          label="Email"
        />
        <PasswordField
          fieldClassName={classes["auth-field"]}
          name="pw"
          label="Password"
        />
        <button className={classes["auth-submit"]} type="submit">
          {mode == "signUp" ? "Sign Up" : "Login"}
        </button>
        {displayMsg}
      </fieldset>
    </form>
  );
}
