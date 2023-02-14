import React from "react";
import {
  FaApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaFacebookF,
  FaGooglePay,
  FaInstagram,
  FaPaypal,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-10 bg-accent">
      {/* <!-- big footer start  --> */}
      <div className="footer lg:p-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-secondary">
        <div className="pr-0 lg:pr-10">
          <span className="footer-title text-xs">About the shop</span>
          <p>
            Our goal is to make your overall fragrance experience as seamless as
            possible, which is why we want all of our customers to have great
            information on the best fragrances at their fingertips.
          </p>
          <ul className="flex gap-5 mt-5">
            <li>
              <a
                className="text-secondary opacity-50 hover:opacity-100 ease-in duration-300"
                href="#s"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                className="text-secondary opacity-50 hover:opacity-100 ease-in duration-300"
                href="#s"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-xs">ABOUT SCENTS ANGEL</span>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="about" className="link link-hover">
                About us
              </Link>
            </li>
            <li>
              <Link to="bottles" className="link link-hover">
                Our Bottles
              </Link>
            </li>
            <li>
              <Link to="perfume" className="link link-hover">
                Perfume Info
              </Link>
            </li>
            <li>
              <Link to="terms" className="link link-hover">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="refund" className="link link-hover">
                Refund policy
              </Link>
            </li>
            <li>
              <Link to="shipping" className="link link-hover">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">DISCOVER </span>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/" className="link link-hover">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-hover">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-hover">
                Fall Fragrances
              </Link>
            </li>
            <li>
              <Link to="/" className="link link-hover">
                Discovery Sets
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-xs">Newsletter</span>
          <span className="label-text">
            Subscribe to receive updates, access to exclusive deals, and more.
          </span>
          <form className="form-control w-80">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full my-5"
            />
            <button type="submit" className="primary-btn w-1/2">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* <!-- big footer end  --> */}
      <div className="footer items-center p-4 text-secondary">
        <div className="items-center grid-flow-row">
          <select className="select w-full max-w-xs bg-transparent border-0">
            <option selected>Bangladesh (BDT ৳)</option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

          <p>
            © <Link to="/">Scents Angel</Link>
          </p>
          <p>
            Powered by{" "}
            <a href="#s" className="font-bold">
              friends it solutions
            </a>
          </p>
        </div>
        <ul className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
          <li>
            <a href="d">
              <i className="  fa-brands fa-apple-pay"></i>
              <FaGooglePay className="text-neutral font-normal text-[30px] leading-[23px]" />
            </a>
          </li>
          <li>
            <a href="d">
              <FaPaypal className="text-neutral font-normal text-[30px] leading-[23px]" />
            </a>
          </li>
          <li>
            <a href="d">
              <FaApplePay className="text-neutral font-normal text-[30px] leading-[23px]" />
            </a>
          </li>
          <li>
            <a href="d">
              <FaCcMastercard className="text-neutral font-normal text-[30px] leading-[23px]" />
            </a>
          </li>
          <li>
            <a href="d">
              <FaCcVisa className="text-neutral font-normal text-[30px] leading-[23px]" />
            </a>
          </li>
          <li>
            <a href="d">
              <FaCcDiscover className="text-neutral font-normal text-[30px] leading-[23px]" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <form>
          <select className="select select-bordered w-full">
            <option selected>Bangladesh (BDT ৳)</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
