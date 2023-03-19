import React from "react";
function Mainmenu() {
  return (
    <>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1>
                  <a href="./">
                    <img src="assets/img/logo.png" />
                  </a>
                </h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="shopping-item">
                <a href="cart.html">
                  Cart - <span className="cart-amunt">$100</span>
                  <i className="fa fa-shopping-cart"></i>
                  <span className="product-count">5</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">
                  <a href="shop.html">Shop page</a>
                </li>
                <li>
                  <a href="single-product.html">Single product</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>
                  <a href="#">Others</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainmenu;
