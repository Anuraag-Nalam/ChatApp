import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  CameraAlt as CameraAltIcon,
  PasswordOutlined,
} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { validatePassword, validateUsername } from "../utils/validation";
import { bgGradient } from "../constants/color";
import { registerUser, loginUser } from "../lib/apiService";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const avatar = useFileHandler("single");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    const usernameError = validateUsername(e.target.value);
    setErrors((prevState) => {
      return {
        ...prevState,
        username: usernameError || "",
      };
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const passwordError = validatePassword(e.target.value);
    setErrors((prevState) => {
      return {
        ...prevState,
        password: passwordError || "",
      };
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    setErrors({ username: usernameError || "", password: passwordError || "" });
    if (usernameError || passwordError) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Logging in...");

    try {
      const response = await loginUser({ username, password });
      console.log("Login Success Response:", response.data); // Log user details
      toast.success(`Welcome back, ${response.data.username}!`, {
        id: toastId,
      });

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      let errorMessage = "Login failed. Please try again.";
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage =
            error.response.data ||
            "You are not authorized to access this application";
        } else if (error.response.status === 404) {
          errorMessage = error.response.data || "User not found";
        } else {
          errorMessage =
            error.response.data || `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage = "Network error. Could not connect to server.";
      }
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading("Signing up...");

    const registrationData = {
      username: username,
      password: password,
      name: name,
      bio: bio,
    };

    try {
      const response = await registerUser(registrationData);
      toast.success(response.data.message || "Signup successful!", {
        id: toastId,
      });
      setIsLogin(true);
    } catch (error) {
      toast.error(errorMessage, { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>

              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username}
                  onChange={handleUsernameChange}
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  value={password}
                  onChange={handlePasswordChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  type="password"
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  variant="text"
                  type="button"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(255,255,255,0.5)",
                        color: "black",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      ></VisuallyHiddenInput>
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="Name"
                  value={name}
                  onChange={handleNameChange}
                  autoComplete="off"
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  label="Bio"
                  value={bio}
                  onChange={handleBioChange}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  label="Username"
                  onChange={handleUsernameChange}
                  error={Boolean(errors.username)}
                  helperText={errors.username}
                  value={username}
                  margin="normal"
                  variant="outlined"
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  onChange={handlePasswordChange}
                  error={Boolean(errors.password)}
                  helperText={errors.password}
                  value={password}
                  margin="normal"
                  variant="outlined"
                  type="password"
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  variant="text"
                  type="submit"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
