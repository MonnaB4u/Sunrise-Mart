import React from 'react';
import Carusels2 from '../Carusel/Carusels2';
import SummerFruit from '../SummerFruit/SummerFruit';
import Nav1 from '../Navbar/Nav1';
import OfferLogo from '../OfferLogo/OfferLogo';
import PopularItems from '../PopularItems/PopularItems';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
import Topsave from '../Topsave/Topsave';
import Trending from '../Trending/Trending';
import Footer from '../Footer/Footer';
import Payment from '../Payment/Payment';

const Home = (props) => {
    return (
        <div>
            <Nav1 cart={props.cart}></Nav1>
            <Sidebar></Sidebar>
            <Carusels2></Carusels2>
            <OfferLogo></OfferLogo>
            <SummerFruit></SummerFruit>
            <Topsave cart={props.cart} setCart={props.setCart}></Topsave>
            <Trending></Trending>
            <Footer></Footer>

        </div>
    );
};

export default Home;
