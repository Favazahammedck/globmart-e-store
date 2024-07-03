import React from "react";
import SaveToCart from "../images/cart/save-to-cart.png";

const ProductListing = ({ products, addToCart }) => {
  return (
    <div className="container">
      <div className="all-products">
        <h2>Popular Products</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <section className="product" key={product.id}>
            <div className="product__photo">
              <div className="photo-container">
                <div className="photo-main">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
            </div>

            <div className="product__info">
              <div className="title">
                <h1>{product.title}</h1>
              </div>
              <div className="price">
                Rs <span>{product.price}</span>
              </div>

              <div className="description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
              <button onClick={() => addToCart(product)} className="buy--btn">
                ADD TO CART{" "}
                <img className="add-to-cart-icon" src={SaveToCart} alt="" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
