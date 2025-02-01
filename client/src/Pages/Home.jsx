import React from "react";
import AppLayout from "../Components/Layout/AppLayout";
import { Box, Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react";
import a1 from "../assets/A1.json";

const Home = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#818589",
      }}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack direction={"row"} position={"fixed"} sx={{ marginTop: "-8rem" }}>
        <Typography variant="h1">Connect - </Typography>
        <Lottie
          animationData={a1}
          loop={true}
          style={{ width: "10rem", height: "10rem", marginTop: "-2rem" }}
        />
      </Stack>
      <TypeAnimation
        sequence={[
          "Welcome to Connect-O, your ultimate chat experience.",
          1000,
          "Welcome to Connect-O, connect with your friends instantly.",
          1000,
          "Welcome to Connect-O, enjoy secure and fast communication.",
          1000,
        ]}
        speed={60}
        style={{ fontSize: "1.5rem", position: "fixed" }}
        repeat={Infinity}
      />
    </Stack>
  );
};

export default AppLayout()(Home);
