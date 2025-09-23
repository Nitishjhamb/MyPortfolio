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

// Define the type for parentToChild prop
interface NavigationProps {
  parentToChild: { mode: string };
  modeChange: () => void;
}

const navItems = [
  { name: "Expertise", id: "expertise" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navigation({ parentToChild, modeChange }: NavigationProps) {
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
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Toolbar
          className="navigation-bar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left: Menu + Home Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="home" onClick={goHome}>
              <HomeIcon />
            </IconButton>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
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
            <Button
              onClick={() => navigate("/certifications")}
              sx={{ color: "#fff" }}
            >
              Certifications
            </Button>
          </Box>

          {/* Right: Theme Toggle */}
          <Box>
            <IconButton onClick={modeChange} sx={{ color: "inherit" }}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          display: { xs: "block", sm: "none" },
          mt: 1,
        }}
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "200px",
            backdropFilter: "blur(10px)",
            backgroundColor:
              mode === "dark"
                ? "rgba(26, 26, 26, 0.8)"
                : "rgba(255, 255, 255, 0.8)",
            color: mode === "dark" ? "#ffffff" : "#000000",
          },
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          sx={{ justifyContent: "flex-end", backgroundColor: "inherit" }}
        >
          <IconButton>
            <CloseIcon
              sx={{ color: mode === "dark" ? "#ffffff" : "#000000" }}
            />
          </IconButton>
        </MenuItem>

        {navItems.map((item, index) => (
          <MenuItem
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            sx={{
              py: 1.5,
              backgroundColor: "inherit",
              opacity: 0,
              animation: "fadeIn 0.3s forwards",
              animationDelay: `${index * 0.1}s`,
              "&:hover": {
                backgroundColor:
                  mode === "dark"
                    ? "rgba(51, 51, 51, 0.8)"
                    : "rgba(224, 224, 224, 0.8)",
              },
            }}
          >
            {item.name}
          </MenuItem>
        ))}

        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate("/resume");
          }}
          sx={{
            py: 1.5,
            backgroundColor: "inherit",
            opacity: 0,
            animation: "fadeIn 0.3s forwards",
            animationDelay: `${navItems.length * 0.1}s`,
            "&:hover": {
              backgroundColor:
                mode === "dark"
                  ? "rgba(51, 51, 51, 0.8)"
                  : "rgba(224, 224, 224, 0.8)",
            },
          }}
        >
          Resume
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate("/certifications");
          }}
          sx={{
            py: 1.5,
            backgroundColor: "inherit",
            opacity: 0,
            animation: "fadeIn 0.3s forwards",
            animationDelay: `${(navItems.length + 1) * 0.1}s`,
            "&:hover": {
              backgroundColor:
                mode === "dark"
                  ? "rgba(51, 51, 51, 0.8)"
                  : "rgba(224, 224, 224, 0.8)",
            },
          }}
        >
          Certifications
        </MenuItem>
      </Menu>

      {/* Define the fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Navigation;
