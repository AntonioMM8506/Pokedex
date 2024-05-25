import FetchAPI from "./api";
import React from 'react';
import Footer from "./footer";
import './globals.css';


const Home = () => {
  return (
    <div>
      <FetchAPI/>
      <Footer/>
    </div>
  );
};


export default Home;