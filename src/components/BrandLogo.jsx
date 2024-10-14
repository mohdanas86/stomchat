import React from "react";
import logo from "../assets/logo.jpg"

const BrandLogo = () => {
  return (
    <div>
      <div className="brandLogo flex justify-center items-center mx-auto">
        <img src={logo ?  logo : "https://stomilar-blog.onrender.com/loogo.jpg"} />
      </div>
    </div>
  );
};

export default BrandLogo;
