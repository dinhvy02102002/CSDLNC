import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Mainmenu from '../components/mainmenu/Mainmenu';
import AllProduct from '../components/allProduct/allProduct';
function ShopPage() { 
    return (   
        <div style={{position: 'relative'}}>
            <Header />
            <Mainmenu/>
            <AllProduct/>
            {/* <Oppo /> */}
            <Footer />
        </div>
    );
}

export default ShopPage;
