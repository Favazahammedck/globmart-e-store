import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./component/banner/Banner";
import Footer from "./component/footer/Footer";
import NavBar from "./component/navbar/NavBar";
import Cart from "./component/cart/Cart";
import CartIcon from "./images/cart/cart.png";
import ProductListing from "./component/ProductListing";
import SaveToCart from "./images/cart/save-to-cart.png";

const apiUrl = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notification, setNotification] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);

        const categoriesArray = response.data.reduce((acc, product) => {
          if (!acc.includes(product.category)) {
            acc.push(product.category);
          }
          return acc;
        }, []);
        setCategories(categoriesArray);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
    setNotification("Product added to cart");

    setTimeout(() => {
      setNotification(null);
    }, 1000);
  };

  const [cartVisible, setCartVisible] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="App">
        <NavBar />
        <div>
          <p className="cart-bt" onClick={toggleCartVisible}>
            <img src={CartIcon} alt="" />
          </p>
          {cartVisible && (
            <div className="cart-section" ref={cartRef}>
              <Cart cartItems={cartItems} totalPrice={totalPrice} />
            </div>
          )}
        </div>
        <Banner />
        {notification && (
          <div className="notification">
            <p>{notification}</p>
            <img src={SaveToCart} alt="" />
          </div>
        )}
        <div className="filter-section">
          <label htmlFor="category">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <ProductListing products={filteredProducts} addToCart={addToCart} />
        <Footer />
      </div>
    </>
  );
}

export default App;
