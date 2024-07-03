import "./footer.css";
import Logo from "../../images/logo/globmart-logo.png";
const Footer = () => {
  return (
    <>
      <div className="Footer-Container">
        <div className="Footer-LeftContainer">
          <img className="logo-image-footer" src={Logo} alt="MyInkista" />

          <p className="Footer-Desc">
            Discover your style with our curated collection of men's and women's
            fashion, bags, accessories, electronic gadgets, and more. Shop
            confidently with secure payments and hassle-free returns. Elevate
            your wardrobe today at Globmart."
          </p>
          <div className="Footer-SocialContainer">
            <div className="Footer-SocialIcon">
              <a
                href="https://www.instagram.com/inkista.in?igsh=MWtybXZ1em42NGQ2Zg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
            <div className="Footer-SocialIcon"></div>
          </div>
        </div>

        <div className="Footer-CenterContainer">
          {/* <h5 className="Footer-Title">Useful List</h5> */}
          <ul className="Footer-List">
            <li className="Footer-ListItem">Home</li>
            <li className="Footer-ListItem">Cart</li>
            <li className="Footer-ListItem">
              <p>About</p>
            </li>
          </ul>
        </div>

        <div className="Footer-RightContainer">
          <div className="Footer-ContactItem">Kerala, India</div>
          <div className="Footer-ContactItem">
            <a className="contact-number-whatsapp-redirection">+91 987777833</a>
          </div>
          <div className="Footer-ContactItem"></div>
        </div>
      </div>
      <div className="contact-us-and-others-and-copyright">
        <div className="contact-us-and-others-wrapper">
          <p className="footer-contactus-and-all-links">Contact Us</p>
          <p className="footer-contactus-and-all-links">Privacy Policy</p>
          <p className="footer-contactus-and-all-links">Terms And Conditions</p>
          <p className="footer-contactus-and-all-links">
            Shipping and Return Policy
          </p>
        </div>
        <div className="copy-right-wrapper">
          <span>© 2024, Globmart.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
