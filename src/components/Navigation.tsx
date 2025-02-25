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
import HomeIcon from "@mui/icons-material/Home"; 

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

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar className="navigation-bar" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* Menu Icon for Small Screens */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: "block", sm: "none" } }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Home Icon */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="home"
                            onClick={() => navigate("/")}
                            sx={{ ml: 2 }}
                        >
                            <HomeIcon fontSize="medium" /> {/* Use the Home icon */}
                        </IconButton>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                sx={{ color: "#fff", fontSize: { xs: "0.8rem", sm: "1rem" } }}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <Button onClick={() => navigate("/resume")} sx={{ color: "#fff" }}>
                            Resume
                        </Button>
                    </Box>

                    {/* Theme Toggle Button */}
                    <IconButton onClick={modeChange} sx={{ color: "inherit" }}>
                        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
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
                <MenuItem onClick={() => navigate("/resume")} sx={{ py: 1.5 }}>
                    Resume
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default Navigation;