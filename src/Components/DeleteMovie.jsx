import React, { useState } from 'react'
import Header from './Header'

const DeleteMovie = () => {

     const [input, changeInput] = useState
     ({
       
       movie_name: ""

     });

     const readValue = (e) => {
       changeInput({ ...input, [e.target.name]: e.target.value });
     };

     const submitValue = () => {
       console.log(input);
     };
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteMovie