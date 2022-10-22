import React from "react";
import { NavLink } from "react-router-dom";

const simplePage = () => {
  return (
    <>
      {/* 1st section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand me-5" href="https://mdbgo.com/">
            <img
              src="https://img.arya.ag//home/arya-logo.webp"
              height={36}
              alt="arya.org Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav">
              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-5">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center ">
              <NavLink to="#">
                <i class="fa-light fa-code-compare"></i>
              </NavLink>
            </div>
            <div
              className="d-flex align-items-center "
              style={{ width: "100%", height: "20%" }}
            >
              <button
                type="button"
                className="btn btn-success ms-5"
                style={{ width: "100%", height: "35px" }}
              >
                Login/Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* second section */}
      <div className="container-fluid">
        <div>
          <h3 className=" mt-3" style={{ marginLeft: "15%" }}>
            Find Sellers
          </h3>
          <h4 className=" mt-3" style={{ marginLeft: "15%" }}>
            View sell requirements posted by users looking for immediate selling
          </h4>
        </div>
      </div>

      {/* 3rd section */}
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarTogglerDemo02"
          >
            <form class="d-flex input-group w-75 ">
              <input
                type="search"
                className="form-control me-3 "
                placeholder="Type query"
                aria-label="Search"
              />
              <input
                type="search"
                className="form-control me-3 "
                placeholder="Type query"
                aria-label="Search"
              />
              <input
                type="search"
                className="form-control me-3 "
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                class="bg-success"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      {/* 4th section */}
      <div className="text-right mt-3" style={{ marginLeft: "65%" }}>
        <h3>Total Requirements:1143</h3>
      </div>
      <div
        className="row border border-success"
        style={{ width: "76%", marginLeft: "10%" }}
      >
        <div className="col-8 ">
          <h3 className="mb-2 mt-4 ms-5">Hi, looking for verified sellers?</h3>
          <h4 className="mb-5 ms-5">
            Post your trade requirement and get best prices from verified
            sellers
          </h4>
          <button type="button" class="btn btn-warning text-dark mb-3 ms-5">
            <h5>Post Trade Requirements</h5>
          </button>
        </div>
        <div className="col-4">
          <div className="ms-5">
            <img
              src="https://www.arya.ag/static/media/buy_sell_banner_desktop.37854e6d.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* 5th section */}
      <div className="card">
        <div className="card-body">
            <div  className="row border border-success " style={{ width: "78%", marginLeft: "9%" }}>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
            <div className=" row border border-success mt-4 ms-4 mb-4"  style={{ width: "96%", marginLeft: "1%" }}>
            <div className="col-4">
              <div >
                <img src="	https://a2z-web.s3.ap-south-1.amazonaws.com/arya/warehouseRequests/img_1603342197.png" alt="" />
              </div>
            </div>
            <div className="col-4">
              <h3>Wheat, Good Quality</h3>
              <h4>Kota,Rajasthan</h4>
              <h4>Quantity:225MT</h4>
              <h4>Expected Price:25600/MT</h4>
              <h4>Payment Term:Ex Warehouse</h4>
            </div>
            <div className="col-4">
              <h3>18 hours ago</h3>
              <h3>ID:632635</h3>
              <button className="btn btn-success">View Details</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default simplePage;
