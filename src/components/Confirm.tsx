import React from "react";
import group from "../assets/Group.png";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Confirm() {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F7F7F8",
                minHeight: "100vh",
                flexDirection: {
                    xs: "column", md: "row"
                }
            }}>
                <Box sx={{
                    width: "658px",
                    height: "658px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={group} alt="good" />

                    <Typography variant="h5" fontWeight={300} mt={7}>
                        Your account successfully created.
                    </Typography>

                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/home"
                        sx={{
                            width: "502px",
                            height: "50px",
                            backgroundColor: "#605BFF",
                            borderRadius: "10px",
                            mt: 5,
                            textTransform: "none",
                            fontSize: "16px"
                        }}
                    >
                        Go to Home
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default Confirm;
