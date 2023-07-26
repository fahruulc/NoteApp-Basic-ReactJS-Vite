// import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="containerHome">
      <h1>Welcome</h1>
      <p>Ini adalah home page dari aplikasi note sederhana kita</p>
      <p>silahkan edit stylenya</p>
      <Link className="buttonLink" to={"/notes"}>
        Buat Catatan...
      </Link>
    </div>
  );
};

export default Home;
