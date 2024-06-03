import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { GiSpotedFlower } from "react-icons/gi";
import ProductSection from "../../component2/Products.js";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useNavigation } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { RxAvatar } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { Logout } from "@mui/icons-material";
import FilterAltTwoToneIcon from "@mui/icons-material/FilterAltTwoTone";
import axios from "axios";
import { Select } from "@mui/material";

const defaultTheme = createTheme();

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function ResponsiveAppBar() {
  // let navigate = useNavigate();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [userLogout, setUserLogout] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElFilters, setAnchorElFilters] = React.useState(null);

  useEffect(() => {
    const fetchFilterDataforDropdown = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://192.168.29.165:3500/filterdataindropdown"
        );
        console.log("Response:", response); // Changes made here
        setFilterData(response.data); //Changes made from const filterdata = response.data
        console.log("Filter Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilterDataforDropdown();
  }, []);

  // const handleDropdownFilter = () => {
  //   setShowDropdown(true);
  //   console.log("Dropdown is Visible");
  //   setShowFilters(true);
  //   console.log("Filters appearing");
  //   console.log("The Filter Data:", filterData);
  // };

  const handleLogout = () => {
    setUserLogout(true);
    navigate("/LoginPage");
    console.log("Logout Successfull");
  };

  const pages = [
    "Products",
    "About Us",
    "Contact-Us",
    <IconButton>
      <StyledBadge badgeContent={cart.length} color="success">
        <FaShoppingCart
          key="ShoppingCart"
          onClick={() => navigate("/CartItems", { state: { cartItems: cart } })}
        />
      </StyledBadge>
    </IconButton>,
  ];
  const settings = [
    "Profile",
    "Account",
    "Dashboard",
    <CiLogout onClick={handleLogout} />,
  ];

  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenFilterDropMenu = (event) => {
    setAnchorElFilters(event.currentTarget);
    setShowDropdown(true);
    console.log("Dropdown is Visible");
    setShowFilters(true);
    console.log("Filters appearing");
    console.log("The Filter Data:", filterData);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseFilterDropMenu = () => {
    setAnchorElFilters(null);
    setShowDropdown(false);
    setShowFilters(false);
    console.log("Dropdown Closed");
  };

  const appBarBackgroundColor = "#6d9051";

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link
          color="inherit"
          href="http://192.168.29.165:3000/Main#app-bar-with-responsive-menu"
        >
          MyShop
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: appBarBackgroundColor }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <GiSpotedFlower
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FLEUR
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page === "ShoppingCart" ? (
                      <FaShoppingCart
                        onClick={() =>
                          navigate("/CartItems", { state: { cartItems: cart } })
                        }
                      />
                    ) : (
                      <Typography textAlign="center">{page}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <GiSpotedFlower
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Fleur
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* <Box>
              <Tooltip title="Open Filters">
                <IconButton onClick={handleOpenFilterDropMenu}>
                  <FilterAltTwoToneIcon />
                </IconButton>
              </Tooltip>
              
            
            <Menu
                  sx={{ mt: "45px" ,width: "300px", maxHeight: "400px"}}
                  id="menu-filters"
                  anchorEl={anchorElFilters}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElFilters)}
                  onClose={handleCloseFilterDropMenu}
                >
                  {filterData.map((filterData) => {
                    <MenuItem key={filterData}>{filterData}</MenuItem>
                    // console.log("Showing Dropdown filters:", filterData);
                  })}
                </Menu>
              
            </Box> */}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open filters">
                <IconButton onClick={handleOpenFilterDropMenu} sx={{ p: 0 }}>
                  <FilterAltTwoToneIcon />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElFilters}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElFilters)}
                onClose={handleCloseFilterDropMenu}
              >
                {filterData.map((filterData) => (
                  <MenuItem
                    key={filterData.category_name}
                    onClick={handleCloseFilterDropMenu}
                  >
                    <Typography textAlign="center">
                      {filterData.category_name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <RxAvatar />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <ProductSection addToCart={addToCart} />

      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "10vh",
          }}
        >
          <CssBaseline />

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 5,
              mt: "auto",
              backgroundColor: "#6d9051",
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1">
                This is made for a work Demo Purpose
              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
export default ResponsiveAppBar;
