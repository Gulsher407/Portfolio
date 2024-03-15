import React from "react";
import reduxcrud from "../assets/portfolio/Redux crud.png";
import textmenuplater from "../assets/portfolio/Text-Meniplater App.png";
import datafinance from "../assets/portfolio/Data-Finance.png";
import reactCart from "../assets/portfolio/Ak Shopping App.png";
import reactWeather from "../assets/portfolio/Weather-App.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 2,
      src: reduxcrud,
      link: "https://redux-reacta.vercel.app/",
    },
    {
      id: 3,
      src: textmenuplater,
      link:" https://text-menuplator.vercel.app/",
    },
    {
      id: 4,
      src: datafinance,
      link:"https://data-finance-nu.vercel.app/",
    },
    {
      id: 5,
      src: reactCart,
      link:"https://redux-cart-murex.vercel.app/",
    },
    {
      id: 6,
      src: reactWeather,
      link:" https://weather-app-ten-rho-47.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 h-36 w-full hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md text-center"
                >
                  Demo
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
