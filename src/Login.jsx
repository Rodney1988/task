import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  StyledField,
  StyledFormDiv,
  StyledLabel,
  StyledSubmitInput
} from "./Login.styled";

export const LoginPage = () => {
  // React hooks
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "tester",
      password: "admin"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // User found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Error message JSX
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <StyledLabel>Username</StyledLabel>
            <StyledField
              id="username"
              name="uname"
              label="Username"
              variant="standard"
              size="small"
            />
          </div>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <StyledLabel>Password </StyledLabel>
          <StyledField
            id="username"
            type="password"
            name="pass"
            label="Password"
            variant="standard"
            size="small"
          />
          {renderErrorMessage("pass")}
        </div>
        <StyledFormDiv className="button-container">
          <StyledSubmitInput type="submit" />
        </StyledFormDiv>
      </form>
    </div>
  );

  const handleSuccess = () => {
    localStorage.setItem("user", true);
    return <Navigate to="/" replace />;
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? handleSuccess() : renderForm}
      </div>
    </div>
  );
};
