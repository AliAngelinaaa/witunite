import React, { useEffect, useState, useRef } from "react";
import "../css/services.css";

function Service({ id, title, description, image}) {
  const services = [
    {
      id: 1,
      title: "Project Sprint",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id: 2,
      title: "Portfolio Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
    {
      id: 3,
      title: "Daily LeetCode",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "",
    },
  ];

  return (
    <div className="service">
      <img 
          className='img'
          src={image} 
          width='140px'
          height='140px'
          style={{ 
            borderRadius: '50%',  
            backgroundColor: 'pink',
            margin: '16px',
          }} 
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Service;
