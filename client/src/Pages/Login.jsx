import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../Components/Style/StyledComponent";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../Utils/validator";
import { useDispatch } from "react-redux";
import { userExists } from "../redux/reducers/auth";
import { toast } from "react-hot-toast";
import axios from "axios";
import { server } from "../Constants/config";
import Lottie from "lottie-react";
import animationData from "../assets/Animation .json";
import a1 from "../assets/A1.json";

function Login() {
  const [isLogin, setisLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => setisLogin((prev) => !prev);

  const name = useInputValidation("");
  const password = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const avatar = useFileHandler("single");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging In...");
    setIsLoading(true);
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          username: username.value,
          password: password.value,
        },
        config
      );
      dispatch(userExists(data.user));
      toast.success(data.message, { id: toastId });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Signing Up...");
    setIsLoading(true);
    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name.value);
    formData.append("bio", bio.value);
    formData.append("username", username.value);
    formData.append("password", password.value);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        formData,
        config
      );
      console.log(data)
      dispatch(userExists(data.user));
      toast.success(data.message, { id: toastId });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        padding: "4rem",
      }}
    >
      <Stack
        direction={"row"}
        position={"fixed"}
        sx={{ marginTop: "-35rem", alignItems: "center" }}
      >
        <Typography variant="h2" fontStyle={"italic"}>
          Connect-
        </Typography>

        <Lottie
          animationData={a1}
          loop={true}
          style={{ width: "6rem", height: "6rem", zIndex: "1" }}
        />
      </Stack>
      <Container
        lg={6}
        sx={{
          display: { xs: "none", md: "none", lg: "block" },
        }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "40rem" }}
        />
      </Container>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "91vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "2",
        }}
      >
        <Paper
          elevation={16}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                  label="username"
                  margin="normal"
                  value={username.value}
                  onChange={username.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="password"
                  type="password"
                  margin="normal"
                  value={password.value}
                  onChange={password.changeHandler}
                ></TextField>
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                >
                  Login
                </Button>
                <Typography textAlign={"center "} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                  disabled={isLoading}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" disabled={isLoading}>
                Sign Up
              </Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
              >
                <Stack position={"relative"} width={"7rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "7rem",
                      height: "7rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "0",
                      bottom: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.4)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
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
                  margin="normal"
                  value={name.value}
                  onChange={name.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="username"
                  margin="normal"
                  value={username.value}
                  onChange={username.changeHandler}
                ></TextField>
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="password"
                  type="password"
                  margin="normal"
                  value={password.value}
                  onChange={password.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="bio"
                  margin="normal"
                  value={bio.value}
                  onChange={bio.changeHandler}
                ></TextField>
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  onClick={handleSignUp}
                  disabled={isLoading}
                >
                  Sign up
                </Button>
                <Typography textAlign={"center "} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                  disabled={isLoading}
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
}

export default Login;
