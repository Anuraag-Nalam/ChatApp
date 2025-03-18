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
import {
  CameraAlt as CameraAltIcon,
  PasswordOutlined,
} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { validatePassword, validateUsername } from "../utils/validation";
import { bgGradient } from "../constants/color";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const avatar = useFileHandler("single");

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (errors.username || errors.password) {
      console.log("Error");
      return;
    }
    //proceed for api call
    console.log("Proceed");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
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
