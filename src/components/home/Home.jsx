import React from "react";
import videoFile from "./v2.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [isJapanese, setIsJapanese] = useState(false);

  const translations = {
    "Three Steps to Get Started": "スタートするための3つのステップ",
    Sign: "サインイン",
    Search: "検索",
    Apply: "応募",
    "Search For Your Dream Job": "夢の仕事を検索",
    "Popular Finds": "人気の仕事",
    "Market manager": "マーケットマネージャー",
    "Restraunt manager": "レストランマネージャー",
    "Teacher for children": "子供向けの教師",
    Delivery: "配達",
    Home: "ホーム",
    About: "約",
    Culture: "文化",
    "Already have an account, login here":
      "すでにアカウントをお持ちですか？こちらからログインしてください",
    "For Employers": "雇用主向け",
    Register: "登録",
    Employers: "雇用主",
    Prices: "価格",
    "User guide": "ユーザーガイド",
    Help: "ヘルプ",
    Legal: "法的",
    "Terms Of use": "利用規約",
    "Privacy Policy": "プライバシーポリシー",
    "Commertial Art": "商業芸術",
    "Contact Us": "お問い合わせ",
    "Tokyo Office": "東京オフィス",
    JapEase: "ジャパンジョブ",
    "Jobs in Japan": "日本の仕事",
    FAQ: "よくある質問",
    Blog: "ブログ",
    "All Rights Reserved": "無断転載を禁じます",
  };

  const toggleLanguage = () => {
    setIsJapanese(!isJapanese);
  };
  return (
    <div className="home">
      <div>
        {/* Video background for a specific div */}
        <div className="video-container1">
          <video autoPlay muted loop id="myVideo">
            {/* Use the imported video file */}
            <source src={videoFile} type="video/mp4" />
          </video>

          {/* Content overlay */}
          <div className="content1">
            <nav className="nav-1 mx-5">
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
                          {isJapanese ? translations["Home"] : "Home"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          {isJapanese ? translations["About"] : "About"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/culture">
                          {isJapanese ? translations["Culture"] : "Culture"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/search">
                          {isJapanese ? translations["Search"] : "Search"}
                        </Link>
                      </li>
                    </ul>
                    <div className="sign d-flex justify-content-center align-items-center">
                      <button className="btn-shine button mx-3">
                        <span>Login</span>
                      </button>

                      <button className="signupBtn mx-3 text-center ">
                        Sign in
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
                      <div class="buttonss">
                        <button
                          class="btns translate-button"
                          onClick={toggleLanguage}
                        >
                          <span></span>
                          <p
                            data-start="good luck!"
                            data-text="English"
                            data-title="日本語"
                          ></p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </nav>
            <div className="items">
              <img
                src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713973017/Group_1_nv7ojw.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
        {/* Other content outside of the video container */}

        {/* Use alt attribute for accessibility */}
      </div>
      <div className="steps">
        <h1 className="text-center mt-5">
          {" "}
          {isJapanese
            ? translations["Three Steps to Get Started"]
            : "Three Steps to Get Started"}
        </h1>
        <hr className="mx-5" />
        <div className="container">
          <div className="row mx-5">
            <div className="col-12 p-4 col-lg-4">
              <div className="card text-center p-5">
                <h1>01</h1>
                <h2> {isJapanese ? translations["Sign"] : "Sign in"}</h2>
                <p>
                  Register as a job seeker and post a resume (Already have an
                  account, login here)
                </p>
              </div>
            </div>
            <div className="col-12 p-4 col-lg-4">
              <div className="card text-center p-5">
                <h1>02</h1>
                <h2> {isJapanese ? translations["Search"] : "Search"}</h2>
                <p>Search for relavent jobs you are intrested in</p>
              </div>
            </div>
            <div className="col-12 p-4 col-lg-4">
              <div className="card text-center p-5">
                <h1>03</h1>
                <h2> {isJapanese ? translations["Apply"] : "Apply"}</h2>
                <p>Apply for your dream job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search p-5">
        <div className="container">
          <div className="row ds">
            <h1 className="text-center">
              {" "}
              {isJapanese
                ? translations["Search For Your Dream Job"]
                : "Search For Your Dream Job"}
            </h1>
          </div>
          <div className="btn-container mt-5">
            <a className="btn-content" href="#">
              <span className="btn-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/search"
                >
                  {isJapanese ? translations["Search"] : "Search"}
                </Link>
              </span>
              <span className="icon-arrow">
                <svg
                  width="66px"
                  height="43px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      id="arrow-icon-one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      id="arrow-icon-two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      id="arrow-icon-three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="featured">
        <div class="container">
          <h1 class="mt-5 text-center">
            {" "}
            {isJapanese ? translations["Popular Finds"] : "Popular Finds"}
          </h1>
          <hr class="mx-5" />

          <div class="row text-center p-5">
            <div class="col-12 col-md-6 col-lg-3 my-5">
              <div class="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/89/89865.png"
                  alt=""
                />
                <h3 class="mt-4">
                  {" "}
                  {isJapanese
                    ? translations["Market manager"]
                    : "Market manager"}
                </h3>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 my-5">
              <div class="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/384/384229.png"
                  alt=""
                />
                <h3 class="mt-4">
                  {" "}
                  {isJapanese
                    ? translations["Restraunt manager"]
                    : "Restraunt manager"}
                </h3>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 my-5">
              <div class="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                  alt=""
                />
                <h3 class="mt-4">
                  {" "}
                  {isJapanese
                    ? translations["Teacher for children"]
                    : "Teacher for children"}
                </h3>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 my-5">
              <div class="card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7541/7541708.png"
                  alt=""
                />
                <h3 class="mt-5">
                  {" "}
                  {isJapanese ? translations["Delivery"] : "Delivery"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        {/* Footer content */}
        <div className="footer">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 col-md-6 col-lg-3 my-3">
                <h2>{isJapanese ? translations["JapEase"] : "JapEase"}</h2>
                <p>
                  {isJapanese ? translations["Jobs in Japan"] : "Jobs in Japan"}
                </p>
                <p>{isJapanese ? translations["FAQ"] : "FAQ"}</p>
                <p>{isJapanese ? translations["Blog"] : "Blog"}</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-3">
                <h2>
                  {isJapanese ? translations["For Employers"] : "For Employers"}
                </h2>
                <p>{isJapanese ? translations["Employers"] : "Employers"}</p>
                <p>{isJapanese ? translations["Prices"] : "Prices"}</p>
                <p>{isJapanese ? translations["User guide"] : "User guide"}</p>
                <p>{isJapanese ? translations["Help"] : "Help"}</p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-3">
                <h2>{isJapanese ? translations["Legal"] : "Legal"}</h2>
                <p>
                  {isJapanese ? translations["Terms Of use"] : "Terms Of use"}
                </p>
                <p>
                  {isJapanese
                    ? translations["Privacy Policy"]
                    : "Privacy Policy"}
                </p>
                <p>
                  {isJapanese
                    ? translations["Commertial Art"]
                    : "Commertial Art"}
                </p>
                <p>{isJapanese ? translations["Contact Us"] : "Contact Us"}</p>
                <p>
                  {isJapanese ? translations["Tokyo Office"] : "Tokyo Office"}
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-3 my-3">
                <h2>
                  {isJapanese ? translations["Contact Us"] : "Contact Us"}
                </h2>
                <p>
                  {isJapanese ? translations["Tokyo Office"] : "Tokyo Office"}
                </p>
                <p>Phone: +123 456 789</p>
                <p>Email: info@japease.com</p>
                <p>Address: 123 Tokyo Street, Japan</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col text-center">
                <p>
                  &copy; 2024 JapEase.{" "}
                  {isJapanese
                    ? translations["All Rights Reserved"]
                    : "All Rights Reserved"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
