import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight"></div>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <Avatar />
      </div>
      <div className="home__body">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
