import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Navebar.css";
import Logo from "../../images/logo/globmart-logo.png";
import SeachIcon from "../../images/navbar-images/searchicon.png";

const apiUrl = "https://fakestoreapi.com/products";

const NavBar = () => {
  const [togglemenu, setTogglemenu] = useState(false);
  const [cartdata, setCartdata] = useState([]);
  const [data, setData] = useState({});
  const [productData, setProductData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  function togglebutton() {
    setTogglemenu(!togglemenu);
  }

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);

    const filteredData = productData.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setSearchResults(filteredData);
  };

  function getproductdetail(id) {
    console.log("Product ID:", id);
  }

  const showSearchBar = !window.location.pathname.startsWith("/productdetail");

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar-user">
          <div className="brand-title">
            <img className="logo-image" src={Logo} alt="MyInkista" />
          </div>
          <a href="#" onClick={togglebutton} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          {togglemenu ? (
            <div className="navbar-links active">
              <ul>
                {data?.username && (
                  <li>
                    <p>
                      {data?.profileImage ? (
                        <img
                          className="profile-icon"
                          src={data?.profileImage}
                          alt="profile"
                        />
                      ) : (
                        <img className="profile-icon" alt="profile" />
                      )}
                    </p>
                  </li>
                )}
                <li>
                  <p className="count-of-cart-item-mobile">
                    {cartdata && cartdata.cartitem && cartdata.cartitem.length}
                  </p>
                </li>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Product List</p>
                </li>
                <li>Contact us</li>
              </ul>
            </div>
          ) : (
            <div className="navbar-links">
              <ul>
                <div className="desktop-navbar-wrapper">
                  <div>
                    <li>
                      <p>Home</p>
                    </li>
                    <li>
                      <p>Product List</p>
                    </li>
                    <li className="hidden-contactus">
                      <p>Contact Us</p>
                    </li>
                  </div>

                  <div>
                    {showSearchBar && (
                      <li>
                        <div className="search-box-wrapper">
                          <img src={SeachIcon} alt="search" />
                          <input
                            className="search-input"
                            type="text"
                            placeholder="Search here"
                            value={searchInput}
                            onChange={handleInputChange}
                          />
                        </div>
                      </li>
                    )}

                    {!showSearchBar && (
                      <li>
                        <p>
                          <div className="blank-area">blank-area</div>
                        </p>
                      </li>
                    )}
                  </div>
                </div>
              </ul>
            </div>
          )}
        </nav>
      </div>

      <div className="mobile-search-suggesstion-wrapper-main">
        {searchInput.length > 0 && searchResults.length > 0 ? (
          searchResults.map((item) => (
            <div
              key={item.id}
              className="search-product-suggestions-mobile"
              onClick={() => getproductdetail(item.id)}
            >
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : searchInput.length > 0 ? (
          // Display "No Match Found" if no matches found
          <div className="search-product-suggestions-mobile">
            <p>No results found!</p>
          </div>
        ) : null}
      </div>

      <div className="search-bar-mobile-wrapper">
        {showSearchBar && (
          <div className="search-box-wrapper">
            <img src={SeachIcon} alt="search" />
            <input
              className="search-input"
              type="text"
              placeholder="Search here"
              value={searchInput}
              onChange={handleInputChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
