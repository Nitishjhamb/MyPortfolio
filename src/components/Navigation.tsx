import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from '@mui/icons-material/Home';

const navItems = [
    { name: "Expertise", id: "expertise" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
];

function Navigation({ parentToChild, modeChange }: any) {
    const { mode } = parentToChild;
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    const scrollToSection = (section: string) => {
        handleMenuClose();
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Function to navigate to home
    const goHome = () => {
        navigate("/");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar className="navigation-bar" sx={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center" 
                }}>
                    
                    {/* Left section with menu and home icons */}
                    <Box sx={{ 
                        display: "flex", 
                        alignItems: "center",
                        gap: 1  
                    }}>
                        {/* Menu Icon for Small Screens */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ 
                                display: { xs: "block", sm: "none" },
                                width: "40px",
                                height: "40px",
                                padding: "8px",
                                alignItems: "center",
                                justifyContent: "center" 
                            }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Home Icon */}
                        <IconButton
                            color="inherit"
                            aria-label="home"
                            onClick={goHome}
                            sx={{
                                width: "40px",
                                height: "40px",
                                padding: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Box>

                    {/* Desktop Navigation - Middle section */}
                    <Box sx={{ 
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        gap: 2  
                    }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                sx={{ color: "#fff", fontSize: { xs: "0.8rem", sm: "1rem" } }}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <Button 
                            onClick={() => navigate("/resume")} 
                            sx={{ color: "#fff" }}
                        >
                            Resume
                        </Button>
                    </Box>

                    {/* Theme Toggle Button - Right section */}
                    <Box>
                        <IconButton 
                            onClick={modeChange} 
                            sx={{ 
                                color: "inherit",
                                width: "40px",
                                height: "40px",
                                padding: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Dropdown Menu for Small Screens */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ display: { xs: "block", sm: "none" }, mt: 1 }}
                PaperProps={{
                    style: {
                        width: "100%",
                        maxWidth: "200px",
                    },
                }}
            >
                <MenuItem onClick={handleMenuClose} sx={{ justifyContent: "flex-end" }}>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </MenuItem>
                {navItems.map((item) => (
                    <MenuItem key={item.name} onClick={() => scrollToSection(item.id)} sx={{ py: 1.5 }}>
                        {item.name}
                    </MenuItem>
                ))}
                <MenuItem onClick={() => {
                    handleMenuClose();
                    navigate("/resume")
                    }} sx={{ py: 1.5 }}>
                    Resume
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Navigation;
