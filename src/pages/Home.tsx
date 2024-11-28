import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedItems from '../components/home/FeaturedItems';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedItems />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;