import React, { useState } from 'react';
import './Home.css';
import Header from '../../compoments/Header/Header';
import ExploreMenu from '../../compoments/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../compoments/FoodDisplay/FoodDisplay';
import AppDownload from '../../compoments/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
