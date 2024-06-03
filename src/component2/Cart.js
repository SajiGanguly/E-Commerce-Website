import { Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import { motion } from "framer-motion";

const Cart = ({ cartItems }) => {
  const [removeFromCart, setRemoveFromCart] = useState(false);
  const [removedFromCartAlert, setRemovedFromCartAlert] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [items, setItems] = useState([]);


useEffect(() => {
 setItems(cartItems);
},[]);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleOnRemoveFromCart = (item) => {
    setRemoveFromCart(true);
    setSuccessAlertOpen(true);
    console.log("Removed From Cart:", item);
    setTimeout(() => {
      setSuccessAlertOpen(false);
    }, 1000);
  };

const removeItemsFromCart = (id) =>{
  const filteredItems  = items.filter(item => item.id !== id);
  setItems(filteredItems);
}

  const cartContainerStyle = {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
  };

  const titleStyle = {
    fontSize: "24px",
    color: "#333",
    margin: "10px 0",
  };

  const cartItemStyle = {
    background: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    margin: "10px 0",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
  };

  const itemTextStyle = {
    fontSize: "16px",
    color: "#333",
  };

  const buttonStyle = {
    padding: "10px 20px",
    background: "#638889",
    color: "#fff",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const buttonHoverStyle = {
    background: "#56d674",
    transition: "background 0.3s ease",
  };

  const checkoutButtonStyle = {
    padding: "13px 30px",
    background: "#2b5563",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginTop: "20px",
  };
  const imgStyleForCart = {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };
  const imgContainerStyle2 = {
    width: "100%",
    height: "20%",
    overflow: "hidden",
    borderRadius: "5px",
    marginBottom: "10px",
    position: "relative",
  };
  return (
    <>
      <div style={cartContainerStyle}>
        {/* <h2 style={titleStyle}>Your cart is empty!</h2> */}
        {cartItems.length === 0 ? (
          <h1 style={itemTextStyle}>Oops!! No items in cart</h1>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={cartItemStyle}>
                <div
                  style={imgContainerStyle2}
                  onMouseOver={(e) =>
                    (e.currentTarget.querySelector("img").style.transform =
                      "scale(1.2)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.querySelector("img").style.transform =
                      "scale(1)")
                  }
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={imgStyleForCart}
                  />
                </div>
                <span style={itemTextStyle}>
                  {item.name} - {item.price}
                </span>

                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  style={buttonStyle}
                  onMouseOver={(e) =>
                    (e.target.style.background = buttonHoverStyle.background)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.background = buttonStyle.background)
                  }
                  onClick={() => removeItemsFromCart(item.id)}
                >
                  Remove from Cart
                </motion.button>
              </li>
            ))}
          </ul>
        )}
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          style={checkoutButtonStyle}
          onMouseOver={(e) =>
            (e.target.style.background = buttonHoverStyle.background)
          }
          onMouseOut={(e) =>
            (e.target.style.background = checkoutButtonStyle.background)
          }
          // onClick={onCheckout}
        >
          CheckOut
        </motion.button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={successAlertOpen}
        onClose={() => setSuccessAlertOpen(false)}
      >
        <MuiAlert
          elevation={16}
          variant="filled"
          onClose={() => setSuccessAlertOpen(false)}
          severity="success"
        >
          Item has been removed from Cart!
        </MuiAlert>
      </Snackbar>
    </>
  );
};
export default Cart;

