import React, { useEffect } from "react";
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
      
        <nav className="navbar nn navbar-expand-lg mx-2 my-2 ">
          
            <a className="navbar-brand" href="#">
              {" "}
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713809021/Picture1_gxkvfm.png"
                alt="Logo"
                height="50px"
              />
            </a>
            <button
              className="navbar-toggler tg"
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
              <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
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
              <div className="ico">
              <div className="cardss">
                <a className="social-link1">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-instagram"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    <path
                      fill="white"
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    ></path>
                  </svg>
                </a>
                <a className="social-link2">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-twitter"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    <path
                      fill="white"
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    ></path>
                  </svg>{" "}
                </a>

                <a className="social-link4">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-whatsapp"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "white" }}
                  >
                    <path
                      fill="white"
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            </div>
          
        </nav>
     
          <Routes>
            <Route exact path="/home" component={Home} />
          </Routes>
          {/* Use className instead of class in JSX */}
          <div className="text my-5">
            <svg
             className="jap mt-5"
              viewBox="0 0 737 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 96L0 84V48H24V72H60V24H12L0 0H84V84L72 96H12ZM88.6875 96L136.688 0H160.688L208.688 96H178.688L172.688 84H130.688L142.688 60H160.688L148.688 36L118.688 96H88.6875ZM273.375 36V24H237.375V36H273.375ZM213.375 96V0H285.375L297.375 12V48L285.375 60H237.375V96H213.375ZM308.062 96V0H380.062V24H332.062V36H380.062V60H332.062V72H380.062L404.062 96H308.062ZM408.75 96L456.75 0H480.75L528.75 96H498.75L492.75 84H450.75L462.75 60H480.75L468.75 36L438.75 96H408.75ZM533.438 96V72H593.438V60H545.438L533.438 48V12L545.438 0H629.438L617.438 24H557.438V36H617.438V72L593.438 96H533.438ZM640.125 96V0H712.125V24H664.125V36H712.125V60H664.125V72H712.125L736.125 96H640.125Z"
                fill="#FFF9F9"
                fillOpacity="0.5"
              />
            </svg>
            <div className="hhh text-center" >
            <h1 className="outext mt-5" style={{ fontWeight: "400", fontSize: "20px" }}>
              We Can Help You Find <span className="multitext"></span>
            </h1></div>
            <button className="button1 mb-4">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text" ><Link style={{color:"black",textDecoration:"none"}} to="/search">
                Search Now
              </Link></span>
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
