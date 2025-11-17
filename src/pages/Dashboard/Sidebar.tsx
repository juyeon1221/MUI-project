import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Forum from "@mui/icons-material/Forum";
import Notifications from "@mui/icons-material/Notifications";
import SpeakerNotes from "@mui/icons-material/SpeakerNotes";
import logo from "../../assets/Logo.png";
import { Height } from "@mui/icons-material";

function Sidebar () {
    const menu = [
        { text: "Dashboard", icon: <DashboardIcon /> },
        { text: "Analytics", icon: <BarChartIcon /> },
        { text: "Invoice", icon: <InsertDriveFile />},
        { text: "Schedule", icon: <SpeakerNotes />},
        { text: "Calendar", icon: <CalendarMonth />},
        { text: "Messages", icon: <Forum />},
        { text: "Notification", icon: <Notifications />},
        { text: "Settings", icon: <SettingsIcon /> },
    ];

  return (

    <Box
        sx={{
            width: 240,
            bgcolor: "white",
            borderRight: "1px solid #e0e0e0",
            p: 2,
            position: "sticky",
            top: 0,
            height: "100vh",
        }}
    >
        <div style={{
            display:"flex", 
            alignItems:"center",
            justifyContent: "center",
            gap:15,
            textAlign: "center",
            marginTop: 50
            }}>
            <img src={logo} alt="logo" 
                style={{
                    width: 42,
                    height: 42
                }}
            />
            <Box fontWeight="bold" fontSize={20} mb={1}>
                Base
            </Box>
        </div>
        <List>
            {menu.map((item) => (
            <ListItemButton key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItemButton>
            ))}
        </List>
    </Box>
    );
};

export default Sidebar;
