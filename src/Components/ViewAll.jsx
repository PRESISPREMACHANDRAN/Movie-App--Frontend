import React, { useState } from 'react'
import Header from './Header';

const ViewAll = () => {

  const [data, changeData] = useState([
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
    { img: "jjj", movie_name: "movie_name", language: "language" },
  ]);
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            {
              data.map(
                (value,index)=>{
                  return(
                     <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex allign-items-stretch">
                <div class="card">
                  <img
                    src={value.img}
                    class="card-img-top"
                    alt="Movie Poster Image"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{value.movie_name}</h5>
                    <p class="card-text">{value.language}</p>
                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
                  )
                }
              )
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAll