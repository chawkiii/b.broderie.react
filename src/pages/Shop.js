import React, { useState } from "react";
import "../styles/shop.css";
import s_cw01 from "../assets/shop/custom_wear/s_cw01.png";
import s_cw02 from "../assets/shop/custom_wear/s_cw02.png";
import s_cw03 from "../assets/shop/custom_wear/s_cw03.png";
import s_cw04 from "../assets/shop/custom_wear/s_cw04.png";

function Shop() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const radioInputs = ["s1", "s2", "s3", "s4", "s5"];

  const productsList = [
    [
      { name: "Caftan 1", price: 15000, image: s_cw01 },
      { name: "Caftan 2", price: 18000, image: s_cw02 },
    ],
    [
      { name: "Robe 1", price: 12000, image: s_cw03 },
      { name: "Robe 2", price: 10000, image: s_cw04 },
    ],
    // Ajoutez d'autres catégories ici...
  ];

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
    });
  };

  const generateProductHTML = (products) => {
    return products.map((product) => (
      <div className="product-container" key={product.name}>
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="product-name">{product.name}</div>
        <div className="product-price">{formatPrice(product.price)}</div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    ));
  };

  return (
    <section className="shop_section">
      <h2>Category</h2>
      <div className="slider-container">
        {radioInputs.map((id, index) => (
          <input
            key={id}
            type="radio"
            name="slider"
            id={id}
            checked={selectedIndex === index}
            onChange={() => setSelectedIndex(index)}
          />
        ))}

        <div className="slider-indicators">
          {["Caftan", "Robe", "Autre", "Carako", "Tissus"].map(
            (label, index) => (
              <div
                key={label}
                className={`slider-indicator ${
                  selectedIndex === index ? "active" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>

      <h2 className="products-title">Products</h2>
      <div className="products-grid">
        {generateProductHTML(productsList[selectedIndex] || [])}
      </div>
    </section>
  );
}

export default Shop;
