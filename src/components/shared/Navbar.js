import React from "react";
import logo from "../../assets/img/logo.png";
import { AiOutlineRight, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      <div class="top-hedader py-3 text-center bg-[#FCE7A8]">
        <p class="text-[#303030] font-bold text-[11px] uppercase tracking-wide leading-[18px]">
          Complimentary Samples With Any Full Bottle Purchase.
        </p>
      </div>
      {/* <!-- navbar start --> */}
      <div class="navbar bg-base-100 px-5 lg:px-20">
        <div class="navbar-start">
          {/* mobile side menu  */}
          <div class="lg:hidden">
            <label htmlFor="mobile-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div class="navbar-center">
          <Link to="/">
            <img src={logo} alt="" class="max-w-[180px]" />
          </Link>
        </div>
        <div class="navbar-end gap-5 items-center">
          <a href="login.html" class="hidden lg:block">
            <AiOutlineUser className="text-2xl text-[#303030]" />
          </a>
          <div class="dropdown dropdown-end">
            <button class="">
              <AiOutlineSearch className="text-2xl text-[#303030]" />
            </button>
            <div
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-none w-52"
            >
              <input
                class="w-full"
                type="search"
                name=""
                id=""
                placeholder="Serach"
              />
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="cursor-pointer">
              <BsBag className="text-2xl text-[#303030]" />
            </label>
            <div
              tabindex="0"
              class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ----- menu bar-------- --> */}
      <div className="drawer">
        <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="hidden lg:block">
            <div className="w-full navbar border-b-2 border-[#e0e0e0] justify-center">
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  <li>
                    <NavLink
                      to="/man"
                      className=" text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      men
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/women"
                      className=" text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      women
                    </NavLink>
                  </li>
                  {/* dropdown menu  */}
                  <li tabindex="0">
                    <span
                      className="text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      top picks
                    </span>

                    <ul class="p-2 w-64 bg-base-100 mt-12 border-2 hover:border-t-2 hover:border-t-secondary">
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Best Spring Fragrances
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Editor's Pick
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Best Sellers
                        </NavLink>
                      </li>
                      {/* multiple dropdown menu  */}
                      <li>
                        <ul className="menu p-0">
                          <li tabIndex={0}>
                            <span
                              className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                            >
                              Top Brands
                              <AiOutlineRight className="ml-28" />
                            </span>
                            <ul class="p-2 w-52 bg-base-100 border-2 ml-2">
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Amouage
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Creed
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Kilian
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Parfums de Marly
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Roja Parfums
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Tom Ford
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NavLink
                      to="/man"
                      className=" text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      Discovery Sets
                    </NavLink>
                  </li>

                  {/* dropdown menu  */}
                  <li tabindex="0">
                    <span
                      className="text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      Brands
                    </span>
                    <ul class="p-2 w-52 bg-base-100 mt-12 border-2 hover:border-t-2 hover:border-t-secondary">
                      <li>
                        {/* multiple dropdown menu  */}

                        <ul className="menu p-0">
                          <li tabIndex={0}>
                            <span
                              className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                            >
                              Top Brands
                              <AiOutlineRight className="ml-16" />
                            </span>
                            <ul class="p-2 w-52 bg-base-100 border-2 ml-2">
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Amouage
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Creed
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Kilian
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Parfums de Marly
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Roja Parfums
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Tom Ford
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        {/* multiple dropdown menu  */}

                        <ul className="menu p-0">
                          <li tabIndex={0}>
                            <span
                              className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                            >
                              Top Brands
                              <AiOutlineRight className="ml-16" />
                            </span>
                            <ul class="p-2 w-52 bg-base-100 border-2 ml-2">
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Amouage
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Creed
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Kilian
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Parfums de Marly
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Roja Parfums
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Tom Ford
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        {/* multiple dropdown menu  */}

                        <ul className="menu p-0">
                          <li tabIndex={0}>
                            <span
                              className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                            >
                              Top Brands
                              <AiOutlineRight className="ml-16" />
                            </span>
                            <ul class="p-2 w-52 bg-base-100 border-2 ml-2">
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Amouage
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Creed
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Kilian
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Parfums de Marly
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Roja Parfums
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Tom Ford
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        {/* multiple dropdown menu  */}

                        <ul className="menu p-0">
                          <li tabIndex={0}>
                            <span
                              className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                            >
                              Top Brands
                              <AiOutlineRight className="ml-16" />
                            </span>
                            <ul class="p-2 w-52 bg-base-100 border-2 ml-2">
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Amouage
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Creed
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Kilian
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Parfums de Marly
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Roja Parfums
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/man"
                                  className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                                >
                                  Tom Ford
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* dropdown menu  */}
                  <li tabindex="0">
                    <span
                      className="text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      Fragrance Finder
                    </span>

                    <ul class="p-2 w-52 bg-base-100 mt-12 border-2 hover:border-t-2 hover:border-t-secondary">
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Woody
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Floral
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Fresh
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/man"
                          className="text-sm font-normal 
                       capitalize text-secondary hover:bg-transparent hover:text-primary"
                        >
                          Warm & Spicy
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className=" text-xs font-bold 
                      border-b-2 mb-[-50px] border-transparent uppercase text-secondary hover:bg-transparent hover:border-b-2 hover:border-secondary"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="mobile-menu" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a href="e">Sidebar Item 1</a>
            </li>
            <li>
              <a href="e">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
