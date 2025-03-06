import React from "react";
import classes from "./Header.module.css";

import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* other section */}
          <div>
            <div className={classes.order_container}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20240524035322"
                alt=""
              />
              <select name="" id="" className={classes.language}>
                <option value="">EN</option>
              </select>
            </div>
            {/* three components */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <BiCart />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
