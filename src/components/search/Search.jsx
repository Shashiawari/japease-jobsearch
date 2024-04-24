import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get(
        "https://jsearch.p.rapidapi.com/search",
        {
          params: {
            query: query,
            location: location,
            page: "1",
            num_pages: "1",
          },
          headers: {
            "X-RapidAPI-Key":
              "457bfe45e8msh223732330696682p188b32jsna734a204897f",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
        }
      );

      // Log the API response for debugging
      console.log("API response:", response.data);

      // Update the jobs state if jobs are found
      if (
        response.data &&
        response.data.data &&
        response.data.data.length > 0
      ) {
        setJobs(response.data.data);
      } else {
        setJobs([]); // No jobs found
      }
    } catch (error) {
      setError(
        "An error occurred while fetching jobs. Please try again later."
      );
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <div className="search1">
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
      <div className="form-search-out">
        <form className="formsearch" onSubmit={handleSubmit}>
          <div className="int">
            <label className="mx-2 my-3" htmlFor="o1">
              Enter job Title
            </label>
            <input
              id="o1"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter job title"
            />
          </div>
          <div className="int">
            <label htmlFor="o2" className="mx-2 my-3">
              location
            </label>

            <input
              id="o2"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </div>
          <button className="butt my-5" type="submit">
            Search
          </button>
        </form>
      </div>
      <h1 className="text-center"> Results</h1>
      {error && <p>{error}</p>}

      {/* Check if jobs exist and render accordingly */}
      {jobs.length > 0 ? (
        <div className="container">
          <div className="row">
            <ul>
              {jobs.map((job) => (
                <div className="my-5 jb ">
                  <div className="d-flex align-items-center">
                    <img src={job.employer_logo} height={"100px"} />

                    <h2 className="mx-3">{job.job_title}</h2>
                  </div>
                  <p className="my-3">{job.employer_name}</p>
                  <p>{job.job_location}</p>
                  <p>{job.job_employment_type}</p>
                  <p>
                    {job.job_min_salary !== null ? (
                      <p>Salary= {job.job_min_salary}</p>
                    ) : (
                      <p>Salary= Not disclosed</p>
                    )}
                  </p>
                  <button className="btn-apply">Apply Now</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="non">
        <p>Try Finding Jobs</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
