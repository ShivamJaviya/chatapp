import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  height: "100vh",
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const Text = styled("div")({
  textAlign: "center",
});

const H1 = styled("h1")({
  color: "#011718",
  marginTop: "-200px",
  fontSize: "15em",
  textShadow:
    "-5px 5px 0px rgba(0,0,0,0.7), -10px 10px 0px rgba(0,0,0,0.4), -15px 15px 0px rgba(0,0,0,0.2)",
  fontFamily: "monospace",
  fontWeight: "bold",
});

const H2 = styled("h2")({
  color: "black",
  fontSize: "5em",
  textShadow: "-5px 5px 0px rgba(0,0,0,0.7)",
  marginTop: "-150px",
  fontFamily: "monospace",
  fontWeight: "bold",
});

const H3 = styled("h3")({
  color: "black",
  marginLeft: "30px",
  fontSize: "2em",
  marginTop: "-40px",
  fontFamily: "monospace",
  fontWeight: "bold",
});

const Torch = styled("div")({
  position: "fixed",
  width: "400px",
  height: "300px",
  margin: "-150px 0 0 -150px",
  boxShadow: "0 0 0 9999em #000000f7",
  opacity: 1,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.3)",
  "&:after": {
    content: '""',
    display: "block",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    top: "0px",
    left: "0px",
    boxShadow: "inset 0 0 40px 2px #000, 0 0 20px 4px rgba(13,13,10,0.2)",
  },
});

function NotFound() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const torch = document.querySelector(".torch");
      if (torch) {
        torch.style.top = `${event.pageY}px`;
        torch.style.left = `${event.pageX}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <Text>
        <H1>404</H1>
        <H2>Uh, Ohh</H2>
        <H3>
          Sorry we can't find what you are looking for 'cuz it's so dark in here
        </H3>
      </Text>
      <Torch className="torch" />
    </Container>
  );
}

export default NotFound;
