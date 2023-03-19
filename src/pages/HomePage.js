import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Mainmenu from '../components/mainmenu/Mainmenu';
import Slider from '../components/slider/Slider';
import Promo from '../components/promo/promo';
import MainContent from '../components/mainContent/mainContent';
import TopSeller from '../components/topSellers/TopSellers';
function HomePage() { 
    return (   
        <div style={{position: 'relative'}}>
            <Header />
            <Mainmenu/>
            <Slider/>
            <Promo/>
            <MainContent/>
            <TopSeller/>
            {/* <Oppo /> */}
            <Footer />
        </div>
    );
}

export default HomePage;
