import React from "react";
import "./culture.css";
import { Link } from "react-router-dom";
const Culture = () => {
  return (
    <div className="culture">
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
      <div class="container-t">
        <div class="content-1">
          <div class="content__container">
            <p class="content__container__text">JAPANESE</p>

            <ul class="content__container__list mx-3">
              <li class="content__container__list__item">Traditions</li>
              <li class="content__container__list__item">Cusine</li>
              <li class="content__container__list__item">Festivals</li>
              <li class="content__container__list__item">Etique</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-culture container " style={{width:"90%",marginTop:"40px"}}>
        <div className="row my-4">
          <div className="col-12 col-md-6 col-lg-6 order-1 order-md-0 my-5">
            <h2>Traditional Arts</h2>
            <p>
              Japan has a rich tradition of arts that dates back centuries. One
              of the most well-known traditional arts is{" "}
              <strong>ikebana</strong>, the art of flower arranging. Ikebana
              emphasizes harmony, balance, and simplicity, and it is often
              practiced as a meditative exercise. Another significant art form
              is <strong>origami</strong>, the art of paper folding. Origami has
              a long history in Japanese culture and is used to create intricate
              sculptures and decorations. <strong>Tea ceremony</strong>, known
              as chanoyu or chado, is a highly ritualized practice that involves
              the preparation and serving of matcha, powdered green tea, in an
              aesthetically pleasing manner. These traditional arts reflect the
              values of discipline, respect, and appreciation for nature that
              are deeply ingrained in Japanese culture.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713929297/7f7bc8b6-9f39-4173-8e56-610aead98225.png"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row my-4 d-flex align-items-center">
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713929473/93e0adad-4ca3-4a35-9e24-854c55c7c044.png"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 order-1 order-md-0">
            <h2>Cuisine</h2>
            <p>
              Japanese cuisine, known as washoku, is renowned for its emphasis
              on fresh, seasonal ingredients and meticulous preparation. Staple
              ingredients such as rice, fish, and vegetables are central to
              Japanese cooking. Sushi, sashimi, tempura, and ramen are just a
              few examples of the diverse range of dishes that make up Japanese
              cuisine. Additionally, the presentation of food is highly valued
              in Japanese culture, with chefs often striving to create visually
              stunning dishes that are as pleasing to the eye as they are to the
              palate.
            </p>
          </div>
        </div>

        <div className="row my-5 d-flex align-items-center">
          <div className="col-12 col-md-6 col-lg-6 order-1 order-md-0">
            <h2>Festivals</h2>
            <p>
              Japan celebrates a wide range of festivals throughout the year,
              each with its own unique customs and traditions. One of the most
              famous festivals is <strong>Sakura Matsuri</strong>, or cherry
              blossom festival, which takes place in spring when cherry trees
              bloom across the country. Another popular festival is{" "}
              <strong>Obon</strong>, a Buddhist event that honors the spirits of
              ancestors. During Obon, families gather to clean graves, perform
              rituals, and dance in traditional folk dances called bon odori.
              These festivals play an important role in bringing communities
              together and preserving cultural heritage.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 ">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713929824/ef3dba45-7852-4588-bb0c-2210e766c2fb.png"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row my-5 d-flex align-items-center">
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713930076/4ca5106b-a3bc-4aae-a2c9-ee2267fa79d4.png"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 ">
            <h2>Etiquette</h2>
            <p>
              Japanese society places a strong emphasis on etiquette and social
              harmony. Bowing is a common form of greeting and showing respect,
              with the depth and duration of the bow varying depending on the
              situation and the status of the individuals involved.
              Additionally, the concept of <strong>omotenashi</strong>, or
              selfless hospitality, is deeply ingrained in Japanese culture.
              This involves anticipating the needs of others and providing
              exceptional service without expecting anything in return.
              Observing proper etiquette is considered essential for maintaining
              harmonious relationships in both personal and professional
              settings.
            </p>
          </div>
        </div>

        <div className="row my-5 d-flex align-items-center">
          <div className="col-12 col-md-6 col-lg-6 order-1 order-md-0">
            <h2>Pop Culture</h2>
            <p>
              Japan is famous for its vibrant pop culture scene, which has
              gained international acclaim in recent decades. From anime and
              manga to video games and J-pop music, Japanese pop culture has a
              significant influence on global trends and entertainment. The
              colorful and imaginative worlds depicted in anime and manga have
              captivated audiences around the world, while Japanese video games
              have set new standards for innovation and storytelling. J-pop
              artists such as Utada Hikaru and Arashi have achieved
              international success, contributing to the global popularity of
              Japanese music.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 ">
            <img
              src="https://res.cloudinary.com/dq7brjjnz/image/upload/v1713930380/d578eb4b-d166-41c5-89cb-ec0bc032de61.png"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
