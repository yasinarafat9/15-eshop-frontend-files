import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Service from './components/Services/Service';
import Banner from './components/Banner/Banner';
import headphone from './assets/hero/headphone.png';

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "!0 Jan to 28 Jan",
  image: headphone ,
  title2: "Air Solo Base",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae molestias voluptate aliquid tenetur? Esse, quam fugit ipsa, nemo magni minus illo hic quod doloribus soluta excepturi fugiat eum delectus!",
  bgColor: "#f42c37",
};


const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Category2></Category2>
      <Service></Service>
      <Banner data={BannerData}></Banner>
    </div>
  );
};

export default App;