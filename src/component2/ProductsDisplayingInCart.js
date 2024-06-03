// import React from "react";

// const ProductItem = ({ product }) => {
//   const productStyle = {
//     background: "#fff",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     padding: "15px",
//     textAlign: "center",
//     width: "200px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     overflow: "hidden",
//   };

//   const titleStyle = {
//     fontSize: "18px",
//     color: "#333",
//     margin: "10px 0",
//   };

//   const descriptionStyle = {
//     fontSize: "14px",
//     color: "#666",
//   };

//   const priceStyle = {
//     fontSize: "16px",
//     color: "#000",
//     fontWeight: "bold",
//     margin: "10px 0",
//   };

//   const imgContainerStyle = {
//     width: "100%",
//     height: "150px",
//     overflow: "hidden",
//     borderRadius: "5px",
//     marginBottom: "10px",
//     position: "relative",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     background: "#638889",
//     color: "#fff",
//     border: "none",
//     borderRadius: "9px",
//     cursor: "pointer",
//   };

//   const imgStyle = {
//     width: "100%",
//     height: "100%",
//     cursor: "pointer",
//     objectFit: "cover",
//     transition: "transform 0.3s ease",
//   };

//   const buttonHoverStyle = {
//     background: "#eab676",
//     transition: "transform 0.3s ease",
//   };

//   return (
//     <div style={productStyle}>
//       <div
//         style={imgContainerStyle}
//         onMouseOver={(e) =>
//           (e.currentTarget.querySelector("img").style.transform = "scale(1.2)")
//         }
//         onMouseOut={(e) =>
//           (e.currentTarget.querySelector("img").style.transform = "scale(1)")
//         }
//       >
//         <img src={product.image} alt={product.name} style={imgStyle} />
//       </div>
//       <h2 style={titleStyle}>{product.name}</h2>
//       <p style={descriptionStyle}>{product.description}</p>
//       <div style={priceStyle}>{product.price}</div>
//       <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
//         {onAddToCart && (
//           <button
//             style={buttonStyle}
//             onMouseOver={(e) =>
//               (e.target.style.background = buttonHoverStyle.background)
//             }
//             onMouseOut={(e) =>
//               (e.target.style.background = buttonStyle.background)
//             }
//             onClick={() => onAddToCart(product)}
//           >
//             Add to Cart
//           </button>
//         )}
//         {onRemoveFromCart && (
//           <button
//             style={buttonStyle}
//             onMouseOver={(e) =>
//               (e.target.style.background = buttonHoverStyle.background)
//             }
//             onMouseOut={(e) =>
//               (e.target.style.background = buttonStyle.background)
//             }
//             onClick={() => onRemoveFromCart(product)}
//           >
//             Remove from Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductItem;
