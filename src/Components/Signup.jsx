import { useState } from "react";

import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";

import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoadingButton from "@mui/lab/LoadingButton";

import signupDecorSVG from "../Illustrations/signup-illus.png";

// import blob from "../Illustrations/blob-2.svg";
import "../css/signup.css";

function Signup() {
  const [values, setValues] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const [signedUp, setSignedUp] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  const [passwordMatchText, setPasswordMatchText] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // So that the helper text of "you must agree..." is not always displayed.
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // const usernameChecker = (event) => {
  //   dispatch(usernameCheckerRedux(event.target.value));
  // }

  const passwordMatchCheck = (event) => {
    if (event.target.name === "confirmPassword") {
      if (event.target.value !== values.password) {
        setPasswordMatchText("Passwords Should Match");
      } else {
        setPasswordMatchText("");
      }
    } else {
      if (event.target.value !== values.confirmPassword) {
        setPasswordMatchText("Passwords Should Match");
      } else {
        setPasswordMatchText("");
      }
    }
  };

  const handleCheckbox = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleSignup = () => {
    const valuesArray = Object.values(values);
    const isEmpty = valuesArray.some((field) => field === "");

    setAllFieldsFilled(!isEmpty);
    setIsCheckboxChecked(checkboxChecked);

    if (!isEmpty && checkboxChecked) {
      submitForm();
    }
  };

  const submitForm = () => {
    setSigningUp(true);
    // if (passwordMatchText === "" && !userExists) {}
    if (passwordMatchText === "") {
      let signupData = {
        ...values,
        dateJoined:
          new Date().getDate() +
          parseInt(new Date().getMonth()) +
          parseInt(1) +
          new Date().getFullYear(),
        verified: false,
      };

      try {
        fetch(`https://${process.env.REACT_APP_API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(signupData),
        })
          .then((res) => res.json())
          .then(() => {
            setSignedUp(true);
            setSigningUp(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div id="signup">
      {/* SHOW */}
      {/* <img src={blob} alt="" className="decor-image-signup" /> */}
      <div className="signup-left">
        <div className="signup-info">
          <p className="preheading app-preheading">Learn More</p>
          <h2 className="signup-heading">
            One account for all your <span> management needs</span>.
          </h2>
          <p className="signup-text">
            Create a ToManage account to use ToNoter and ToDoer. It's completely
            free, fast and simple.
          </p>
          <img className="signup-image" src={signupDecorSVG} alt="" />
        </div>
      </div>
      <div className="signup-right">
        {/* { signedUp ?  */}
        <div
          className="signedup-box"
          style={{
            opacity: !signedUp ? "0" : "1",
            transition: "all .3s",
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: "4rem",
              color: "#198754",
              scale: !signedUp ? "0" : "1",
              transition: "all .35s",
            }}
          />
          <p className="signedup-heading">Account Created</p>
          <p className="signedup-text">
            You can now login to
            <a href="#a"> ToDoer </a> and
            <a href="#a"> ToNoter </a>
          </p>
        </div>
        {/* : */}
        <div
          className="signup-form"
          style={{
            opacity: signedUp ? "0" : "1",
            transition: "all .3s",
          }}
        >
          <div className="signup-form-fields">
            {!allFieldsFilled ? (
              <FormHelperText
                sx={{
                  color: "#ff3333",
                  margin: "0.5rem 0",
                  alignSelf: "start",
                }}
                id="component-helper-text"
              >
                *Please fill in all the fields
              </FormHelperText>
            ) : (
              !isCheckboxChecked && (
                <FormHelperText
                  sx={{
                    color: "#ff3333",
                    margin: "0.5rem 0",
                    alignSelf: "start",
                  }}
                  id="component-helper-text"
                >
                  *You must agree to ToManage's privacy policy
                </FormHelperText>
              )
            )}
            <Box sx={{ display: "flex" }}>
              <FormControl
                variant="standard"
                className="signup-field signup-field-name"
                sx={{ marginRight: "2rem" }}
              >
                <InputLabel htmlFor="component-helper">First Name</InputLabel>
                <Input
                  id="component-helper"
                  name="firstName"
                  value={values.firstName}
                  // value={name}
                  onChange={handleChange}
                  required
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text"> </FormHelperText>
              </FormControl>
              <FormControl
                variant="standard"
                className="signup-field signup-field-name"
              >
                <InputLabel htmlFor="component-helper">Last Name</InputLabel>
                <Input
                  id="component-helper"
                  name="lastName"
                  value={values.lastName}
                  // value={name}
                  onChange={handleChange}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text"> </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl variant="standard" className="signup-field">
                <InputLabel htmlFor="component-helper">Username</InputLabel>
                <Input
                  id="component-helper"
                  name="_id"
                  value={values._id}
                  required
                  // value={name}
                  onChange={handleChange}
                  // onBlur={usernameChecker}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText
                  sx={{ color: "#ff3333", margin: "0.5rem 0" }}
                  id="component-helper-text"
                >
                  {/* {userExists ? "Username already exists" : ""} */}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl variant="standard" className="signup-field">
                <InputLabel htmlFor="component-helper">Email</InputLabel>
                <Input
                  id="component-helper"
                  name="email"
                  value={values.email}
                  required
                  // value={name}
                  onChange={handleChange}
                  aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text"> </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControl variant="standard" className="signup-field">
                <InputLabel htmlFor="component-helper">Password</InputLabel>
                <Input
                  id="component-helper"
                  name="password"
                  value={values.password}
                  type={values.showPassword ? "text" : "password"}
                  // value={name}
                  onChange={handleChange}
                  aria-describedby="component-helper-text"
                  required
                  onBlur={passwordMatchCheck}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <FormControl variant="standard" className="signup-field">
                <InputLabel htmlFor="component-helper">
                  Re-Type Password
                </InputLabel>
                <Input
                  id="component-helper"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  type={values.showPassword ? "text" : "password"}
                  // value={name}
                  onChange={handleChange}
                  onBlur={passwordMatchCheck}
                  aria-describedby="component-helper-text"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText
                  sx={{ color: "#ff3333", margin: "0.5rem 0" }}
                  id="component-helper-text"
                >
                  {passwordMatchText}
                </FormHelperText>
              </FormControl>
            </Box>
          </div>
          <div className="form-checkbox">
            <Checkbox onChange={handleCheckbox} {...label} required />I Agree to
            ToManage's privacy policy
          </div>

          {signingUp ? (
            <LoadingButton
              variant="contained"
              onClick={handleSignup}
              className="signup-button"
              sx={{
                fontWeight: "600",
                /* color: aliceblue; */
                textTransform: "uppercase",
                padding: "0.5rem 1.25rem",
                border: "0",
                borderRadius: "1px",
                cursor: "pointer",
                marginTop: "3rem",
                transition: "0.2s all",
                fontSize: "1rem",
                backgroundColor: "#2C74B3",
                color: "#f9fafb",
                "&:hover": {
                  backgroundColor: "#205295",
                },
              }}
              loading
            >
              Sign Up
            </LoadingButton>
          ) : (
            <LoadingButton
              variant="contained"
              onClick={handleSignup}
              className="signup-button"
              sx={{
                fontWeight: "600",
                /* color: aliceblue; */
                textTransform: "uppercase",
                padding: "0.5rem 1.25rem",
                border: "0",
                borderRadius: "1px",
                cursor: "pointer",
                marginTop: "3rem",
                transition: "0.2s all",
                fontSize: "1rem",
                backgroundColor: "#2C74B3",
                color: "#f9fafb",
                "&:hover": {
                  backgroundColor: "#205295",
                },
              }}
            >
              Sign Up
            </LoadingButton>
          )}
        </div>
        {/* } */}
      </div>
    </div>
  );
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default Signup;
