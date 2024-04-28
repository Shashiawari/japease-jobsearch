import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import Home from "../home/Home";
import videoFile from "./v1.mp4"; // Import the video file
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Main = () => {

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typingeffect = new Typed(".multitext", {
      strings: ["Full-time jobs", "part-time jobs", "your dream jobs"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typingeffect.destroy();
    };
  }, []);
  return (
    <div className="main-1">
      <div className="ct">
        <video autoPlay muted loop id="myVideo">
          {/* Use the imported video file */}
          <source src={videoFile} type="video/mp4" />
        </video>

        <div className="content">
          <nav className="nav-1 ">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  {" "}
                  <img
                    src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713809021/Picture1_gxkvfm.png"
                    alt="Logo"
                    height="50px"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <label class="hamburger">
                    <input type="checkbox" />
                    <svg viewBox="0 0 32 32">
                      <path
                        class="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      ></path>
                      <path class="line" d="M7 16 27 16"></path>
                    </svg>
                  </label>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto d-flex justify-content-center">
                    <li className="nav-item">
                      <Link className="nav-link" to="/home">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/culture">
                        Culture
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/search">
                        Search
                      </Link>
                    </li>
                  </ul>
                  <div className="sign d-flex justify-content-center align-items-center">
                    <button className="btn-shine button mx-3">
                      <span>Login</span>
                    </button>

                    <button className="signupBtn mx-3">
                      SIGN UP
                      <span className="arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                          fill="rgb(183, 128, 255)"
                        >
                          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </nav>
          <div className="inside mx-5 ">
          <img src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713972246/8fd1df0d-a46f-46f8-8780-a55f3241aa79.png" className="img-fluid  "></img>
          <h1
                  className="outext mt-5"
                  style={{ fontWeight: "400", fontSize: "20px" }}
                >
                  We Can Help You Find <span className="multitext"></span>
                </h1>

                <button className="button1 mt-4">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <span className="button_text">
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/search"
                    >
                      Search Now
                    </Link>
                  </span>
                </span>
              </button>
          </div>

          <p className="foot">© 2024 JapEase. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
