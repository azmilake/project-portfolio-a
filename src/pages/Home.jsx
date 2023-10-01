import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Card from '../components/CardPopular';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Store - Home';
  }, []);

  return (
    <div>
      <Navigation />
      <Banner />
      <Card />
      <CardProduct />
      <Footer />
    </div>
  );
};

export default Home;
