import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"
                />
                
                <div className="home__row">
                    <Product 
                        id="15897"
                        title="Book : Focus on yourself or your business..."
                        price={250} 
                        image="https://i.pinimg.com/564x/46/56/92/465692da437432b23c077af26631678b.jpg" 
                        rating={5}
                    />
                    
                    <Product
                        id="12184"
                        title="Book : Javascript: Javascript Programming For Absolute Be..."
                        price={1349}
                        image="https://http2.mlstatic.com/D_NQ_NP_794903-MLA26289240932_112017-O.webp"
                        rating={5}
                     />
                </div>
                
                <div className="home__row">
                        <Product
                            id="87529"
                            title="Book : Learning React Native: Building Native Mobile Apps..."
                            price={1151}
                            image="https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
                            rating={5}
                        />

                        <Product
                            id="22778"
                            title="Book : React For Real Front-end Code, Untangled - Fischer,.."
                            price={4720}
                            image="https://http2.mlstatic.com/D_NQ_NP_960888-MLA30864694005_052019-O.webp"
                            rating={3}
                        />

                        <Product
                            id="23879"
                            title="Book : React Design Patterns And Best Practices Build Easy.."
                            price={4800}
                            image="https://http2.mlstatic.com/D_NQ_NP_949721-MLA29020525244_122018-O.webp"
                            rating={5}
                        />
                </div>
                
                <div className="home__row">
                    <Product
                        id="76257"
                        title="Book : Python Crash Course The Introduction To Programming.."
                        price={4951}
                        rating={4}
                        image="https://http2.mlstatic.com/D_NQ_NP_678176-MLA31546487400_072019-O.webp"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
