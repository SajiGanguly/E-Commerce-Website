import React, { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image8 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image12 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image3 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image6 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import axios from "axios";
import { motion } from "framer-motion";
const ProductSection = ({ addToCart }) => {
  const [productsNew, setProductsNew] = useState([]);

  const products = [
    {
      id: 1,
      name: "Black Short Dress",
      description: "This is the description for product 1.",
      category: "dre",
      price: "₹899.00",
      image: image1,
    },
    {
      id: 2,
      name: "Red Floral Dress",
      description: "This is the description for product 2.",
      category: "dre",
      price: "₹1299.00",
      image: image2,
    },
    {
      id: 3,
      name: "Blue T-Shirt Men",
      description: "This is the description for product 3.",
      category: "tsrt",
      price: "₹1099.00",
      image: image3,
    },
    {
      id: 4,
      name: "White with baby pink floral pattern",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹799.00",
      image: image4,
    },
    {
      id: 5,
      name: "Blue-Floral print",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹1499.00",
      image: image5,
    },
    {
      id: 6,
      name: "Light Grey Shirt",
      description: "This is the description for product 3.",
      category: "srt",
      price: "₹1399.00",
      image: image6,
    },
    {
      id: 7,
      name: "Pinkish Red Flared Dress",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹999.00",
      image: image7,
    },
    {
      id: 8,
      name: "Maroon Printed Flowers Dress ",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹999.00",
      image: image8,
    },
    {
      id: 9,
      name: "Grey Shirt Men",
      description: "This is the description for product 3.",
      category: "srt",
      price: "₹999.00",
      image: image9,
    },
    {
      id: 10,
      name: "Brown Oversized T-Shirt",
      description: "This is the description for product 3.",
      category: "tsrt",
      price: "₹999.00",
      image: image10,
    },
    {
      id: 11,
      name: "Summer Greyish White Dress",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹1299.00",
      image: image14,
    },

    {
      id: 12,
      name: "Printed Blue Bodycon",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹899.00",
      image: image12,
    },
    {
      id: 13,
      name: "Grey T-Shirt",
      description: "This is the description for product 3.",
      category: "tsrt",
      price: "₹999.00",
      image: image11,
    },
    {
      id: 14,
      name: "Black dress Flared",
      description: "This is the description for product 3.",
      category: "dre",
      price: "₹999.00",
      image: image13,
    },
  ];

  useEffect(() => {
    const getProductsFromDB = async () => {
      try {
        const response = await axios.post(
          "http://192.168.29.165:3500/allproductsfromstore"
        );
        console.log(response.data.message);
        console.log(response.data.data);
        if (response.data != null) {
          setProductsNew(response.data.data);
        }
      } catch {
        // console.log('Error:', error);
      }
    };
    getProductsFromDB();
  }, []);

  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  };

  const productStyle = {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
  };
  const titleStyle = {
    fontSize: "14px",
    color: "#333",
    margin: "10px 0",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#666",
  };

  const priceStyle = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const imgContainerStyle = {
    width: "100%",
    height: "50%",
    overflow: "hidden",
    borderRadius: "5px",
    marginBottom: "10px",
    position: "relative",
  };
  const buttonStyle = {
    padding: "10px 20px",
    background: "#638889",
    color: "#fff",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
  };
  const imgStyle = {
    width: "100%",
    height: "130%",
    cursor: "pointer",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };
  const buttonHoverStyle = {
    background: "#eab676",
    transition: "transform 0.3s ease",
  };
  return (
    <section style={sectionStyle}>
      {productsNew.map((product, id) => (
        <div style={productStyle} key={id}>
          <div
            style={imgContainerStyle}
            onMouseOver={(e) =>
              (e.currentTarget.querySelector("img").style.transform =
                "scale(1.2)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.querySelector("img").style.transform =
                "scale(1)")
            }
          >
            <img src={product.image} alt={product.name} style={imgStyle} />
          </div>

          <h2 style={titleStyle}>{product.name}</h2>

          <p style={descriptionStyle}>{product.description}</p>

          <div style={priceStyle}>{product.price}</div>

          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <motion.button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.target.style.background = buttonHoverStyle.background)
              }
              onMouseOut={(e) =>
                (e.target.style.background = buttonStyle.background)
              }
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              Buy Now
            </motion.button>
            <motion.button
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.target.style.background = buttonHoverStyle.background)
              }
              onMouseOut={(e) =>
                (e.target.style.background = buttonStyle.background)
              }
              onClick={() => addToCart(product)}
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              Add to cart
            </motion.button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;
