import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import tomanageLogo from "../Logo/tomanage-logo-1.png";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className="mobile-nav-container" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img className="mobile-nav-tomanage-logo" src={tomanageLogo} alt="" />

      <Divider />
      <ul className="nav mobile-nav">
        <li className="nav-link">
          <a href="#null">Home</a>
        </li>
        <li className="nav-link">
          <a href="#null">Products</a>
        </li>
        <li className="nav-link">
          <a href="#null">Contact</a>
        </li>
        <li className="nav-link">
          <button className="header-button" href="#null">
            Create Account
          </button>
        </li>
      </ul>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", }}>
      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
