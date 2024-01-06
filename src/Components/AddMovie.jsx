import React, { useState } from "react";
import Header from "./Header";

const AddMovie = () => {
  const [input, changeInput] = useState({
    img: "",
    movie_name: "",
    actor_name: "",
    actress_name: "",
    director_name: "",
    producer_name: "",
    released_year: "",
    language: ""
  });

  const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
  }

  const submitValue=()=>{
    console.log(input)
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Movie Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="movie_name"
                  value={input.movie_name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Actor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="actor_name"
                  value={input.actor_name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Actress Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="actress_name"
                  value={input.actress_name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Director Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="director_name"
                  value={input.director_name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Producer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="producer_name"
                  value={input.producer_name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Released Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="released_year"
                  value={input.released_year}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Language
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="language"
                  value={input.language}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Movie Poster Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="img"
                  value={input.img}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
