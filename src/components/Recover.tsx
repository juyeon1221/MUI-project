import React, { useState } from "react";
import { Box, Button, TextField, Typography, Snackbar } from "@mui/material";
import { SnackbarCloseReason } from "@mui/material";
import logo from "../assets/Logo.png";

function Recover() {
  const [open, setOpen] = useState(false);

  const handleReset = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F7F8",
        minHeight: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: "658px",
          height: "658px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" />
        <Typography variant="h5" fontWeight={300} mt={7}>
          Recover
        </Typography>

        <TextField
          label="Email Address"
          type="email"
          sx={{
            width: "502px",
            height: "50px",
            mt: 7,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#F7F7F8",
              color: "#030229",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            width: "502px",
            height: "50px",
            backgroundColor: "#605BFF",
            borderRadius: "10px",
            mt: 5,
            textTransform: "none",
            fontSize: "16px",
          }}
          onClick={handleReset}
        >
          Reset Your Password
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Password reset email has been sent!"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Box>
    </Box>
  );
}

export default Recover;
