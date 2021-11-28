import React from "react";
import "./css/header.css";
//import "./js/header";

const Header = (props) => {
  const toggle = (e) => {
    props.toggleit === 0 ? props.settoggleit(1) : props.settoggleit(0);
  };

  return (
    <>
      <div className="header">
        <div className="icon">
          <div className="btn" id="btn">
            <i className="fa fa-bars" onClick={toggle}></i>
          </div>
          <div className="brand">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              alt="logo-pic"
            />
            <span>Keep</span>
          </div>
        </div>
        <div className="search">
          <form className="form-search" method="get">
            <div className="first">
              <span className="search-logo">
                <i className="fa fa-search"></i>
              </span>
              <span>
                <input
                  type="text"
                  className="search-item"
                  placeholder="Search"
                />
              </span>
            </div>
          </form>
        </div>
        <div className="icons">
          <i className="material-icons">refresh</i>
          <i className="material-icons">view_agenda</i>
          <i className="material-icons">settings</i>
          <i className="material-icons">apps</i>
        </div>
      </div>
    </>
  );
};

export default Header;
