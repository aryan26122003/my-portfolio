import React from "react";

export default function Adminnav() {
  return (
    <div className="container-fluid bg-dark">
        <nav className="navbar navbar-expand-lg navbar-light text-white">
          <div className="col">
            <a className="navbar-brand text-white" href="#">
              Admin
            </a>
          </div>
          <div className="col text-right">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="col d-flex">
                  <div className="col-lg-4">
                    <i className="fa-solid fa-magnifying-glass "></i>
                  </div>
                  <div className="col-lg-4">
                    <i className="fa-solid fa-bell "></i>
                  </div>
                  <div className="col-lg-4">
                    <i className="fa-solid fa-user "></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
    </div>
  );
}
