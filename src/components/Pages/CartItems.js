import { AppBar, Container, Typography, Toolbar } from "@mui/material";
import React from "react";
import { FaOpencart } from "react-icons/fa";
import { useLocation } from "react-router";
import Cart from "../../component2/Cart.js";
import { IoMdArrowRoundBack } from "react-icons/io";

const myAppBarBackgroundColor = "#6d9051";

export default function CartItems() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] }; //location.state || {};
  console.log(cartItems);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: myAppBarBackgroundColor }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IoMdArrowRoundBack />

            <Typography
              variant="h6"
              noWrap
              component="button"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              MY CART{" "}
              <FaOpencart sx={{ display: { xs: "", md: "flex" }, mr: 1 }} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <div>
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}
