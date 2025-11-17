import React, { useState } from "react";
import { Box, Button, Container, Divider, FormControlLabel, TextField, Typography, Checkbox, Link as MuiLink, InputAdornment, IconButton,
} from "@mui/material";
import logo from "../assets/Logo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import illust from "../assets/Illustration (1).png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link as RouterLink } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff",
            p: 4,
            flex: {
              xs: "1 1 auto",
              md: "0 0 30%",
            },
          }}
        >
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <img src={logo} alt="logo" style={{ marginBottom: 40 }} />
            <Typography variant="h5" fontWeight={300} mb={3}>
              Log in
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "22px",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<img src={google} alt="Google" />}
                sx={{
                  backgroundColor: "#F7F7F8",
                  borderRadius: "10px",
                  width: "164px",
                  height: "50px",
                  textTransform: "none",
                  border: "none",
                }}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<img src={facebook} alt="Facebook" />}
                sx={{
                  backgroundColor: "#F7F7F8",
                  borderRadius: "10px",
                  width: "164px",
                  height: "50px",
                  textTransform: "none",
                  border: "none",
                }}
              >
                Facebook
              </Button>
            </Box>

            <Divider sx={{ my: 3, color: "#030229" }}>Or</Divider>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#F7F7F8",
                  color: "#030229",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <TextField label="Email Address" type="email" fullWidth />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 4,
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="body2" color="#030229">
                    {" "}
                    Remember me
                  </Typography>
                }
              />
              <MuiLink
                component={RouterLink}
                to="/recover"
                underline="hover"
                color="#605BFF"
              >
                Reset Password?
              </MuiLink>
            </Box>

            <Button
              component={RouterLink}
              to="/home"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#605BFF",
                height: "50px",
                borderRadius: "10px",
                mt: 5,
                textTransform: "none",
              }}
            >
              Log in
            </Button>

            <Typography color="#030229" sx={{ mt: 4 }}>
              Don’t have account yet?{" "}
              {/* 회원가입 링크도 Link 컴포넌트로 */}
              <MuiLink
                component={RouterLink}
                to="/signup"
                underline="hover"
                color="#605BFF"
              >
                New Account
              </MuiLink>
            </Typography>
          </Container>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#FAFAFA",
          }}
        >
          <img
            src={illust}
            alt="illustration"
            style={{
              maxWidth: "100%",
              margin: "0 auto",
              height: "auto",
              width: "auto",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Login;
