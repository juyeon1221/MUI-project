import React from "react";
import logo from "../assets/Logo.png";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F7F7F8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "726px",
            height: "726px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" />
          <Typography
            variant="h4"
            color="#030229"
            sx={{
              mt: 4,
            }}
          >
            Base
          </Typography>
          <Typography
            variant="h5"
            color="#030229"
            sx={{
              mt: 4,
            }}
          >
            안녕하세요 ! 홈입니다 !
          </Typography>
          <Typography
            sx={{
              mt: 8,
            }}
          >
            <MuiLink
              component={RouterLink}
              to="/login"
              underline="hover"
              color="#605BFF"
            >
              Logout
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
