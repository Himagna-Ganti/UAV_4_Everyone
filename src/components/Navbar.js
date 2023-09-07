import React from "react";
import uOlogo from "../assets/uOttawa_HOR_BLACK_2021.svg";
function Navbar() {
  return (
    <div className="w-screen z-10 h-[80px] border-black bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center h-[50px] align-middle">
          <img src={uOlogo} alt="" className="h-full " />
        </div>
        <div className="pr-[50px]">
          <ul className="flex ">
            <li>Home</li>
            <li>About</li>
            <li>
              <a href="http://localhost:8501/" target="blank">
                Yolo
              </a>
            </li>
            <li>Datasets</li>
            <li>Know more</li>
          </ul>
        </div>
        <div className="flex mr-[10px] mt-[5px] items-center h-[50px] align-middle">
          <img
            src="http://carg.site.uottawa.ca/IApictures/logo.png"
            alt=""
            className="h-full "
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
