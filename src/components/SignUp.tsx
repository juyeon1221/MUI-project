import React, { useState } from "react";
import { Button, Box, TextField, Typography, Container, FormControlLabel, Checkbox, Divider, IconButton, Link, Link as MuiLink, InputAdornment } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo from "../assets/Logo.png";
import illust from "../assets/Illustration.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import { Link as RouterLink } from "react-router-dom";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <Box sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                minHeight: "100vh" 
            }}>
                <Box sx={{ 
                    flex: { xs: "1 1 auto", md: "0 0 30%" }, 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    p: 4, 
                    backgroundColor: "#fff" 
                }}>
                    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                        <img src={logo} alt="logo" style={{ marginBottom: 40, maxWidth: "150px" }} />
                        <Typography variant="h5" fontWeight={300} mb={3} color="#030229">Sign Up</Typography>

                        <Box sx={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            gap: "22px", 
                            alignItems: "center", 
                            justifyContent: "center" 
                        }}>
                            <Button variant="outlined" startIcon={
                                <img src={google} alt="Google" />
                            } sx={{ 
                                width: "164px", 
                                height: "50px", 
                                textTransform: "none", 
                                borderRadius: "10px", 
                                backgroundColor: "#F7F7F8",
                                border: "none" 
                            }}>Google
                            </Button>
                            <Button variant="outlined" startIcon={
                                <img src={facebook} alt="Facebook"/>
                            } sx={{ 
                                width: "164px", 
                                height: "50px", 
                                textTransform: "none", 
                                borderRadius: "10px", 
                                backgroundColor: "#F7F7F8", 
                                border: "none" 
                            }}>Facebook
                            </Button>
                        </Box>

                        <Divider sx={{ my: 3, color: "#030229" }}>Or</Divider>

                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "10px",
                                backgroundColor: "#F7F7F8",
                                color: "#030229"
                            },
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
                        }}>
                            <TextField label="Full Name" fullWidth />
                            <TextField label="Email Address" type="email" fullWidth />
                            <TextField label="Username" fullWidth />
                            <TextField label="Password" type={showPassword ? "text" : "password"} fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleTogglePassword} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                        
                        <Box sx={{
                            display:"flex", 
                            flexDirection:"column",
                            alignItems:"center",
                            justifyContent:"center",
                            mt:2,
                            mb:2
                        }}>
                            <FormControlLabel 
                                control={<Checkbox />} 
                                label={
                                    <Typography variant="body2" color="#030229">
                                        By creating an account you agree to the
                                    </Typography>
                                }
                            />
                            <Typography variant="body2" color="#030229">
                                <Link href="#" underline="hover" sx={{ color: "#605BFF" }}>
                                    terms of use
                                </Link>
                                {" and our "}
                                <Link href="#" underline="hover" sx={{ color: "#605BFF" }}>
                                    privacy policy
                                </Link>.
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            fullWidth
                            component={RouterLink}
                            to="/confirm"
                            sx={{ 
                                textTransform: "none", 
                                backgroundColor: "#605BFF", 
                                height: "50px", 
                                borderRadius: "10px" 
                            }}
                        >
                            Create account
                        </Button>

                        <Typography align="center" variant="body2" color="#030229" sx={{ mt: 4 }}>
                            Already have an account?{" "}
                            <MuiLink component={RouterLink} to="/login" underline="hover" sx={{ color: "#605BFF" }}>
                                Log in
                            </MuiLink>
                        </Typography>

                    </Container>
                </Box>

                <Box sx={{ 
                    flex: 1, 
                    backgroundColor: "#FAFAFA", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center" 
                }}>
                    <img src={illust} alt="illustration"
                        style={{ 
                            maxWidth: "100%", 
                            margin: "0 auto", 
                            height: "auto", 
                            width: "auto" 
                        }} />
                </Box>
            </Box>
        </>
    )
}

export default SignUp;
