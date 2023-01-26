import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const baseURL = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
const imgArr = ['https://m.media-amazon.com/images/I/61p8fxhYxPL._QL85_V1_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg'];

function Home() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const arr = [];
        axios.get(`${baseURL}`).then((response) => {

            const temp = response.data.reduce((proObj, pro) => {
                return Object.assign(proObj, { [pro.id]: { ...pro } });

            }, {})
            return temp;
        }).then((res) => {
            for (const key in res) {
                arr.push(<Product
                    key={key}
                    id={key}
                    title={res[key].title}
                    price={res[key].price}
                    rating={res[key].rating}
                    image={res[key].image}

                />);

            }
            setProducts([...arr]);
        });


    }, []);
    return products && (
        <div className='home'>
            <Carousel className='home_banner' infiniteLoop={true} autoPlay showStatus = {false} showThumbs={false}>
                <div>
                    <img src={imgArr[0]} />
                </div>
                <div>
                    <img src={imgArr[1]} />
                </div>
            </Carousel>
            {/* <img
                className='home_banner'
                src='https://m.media-amazon.com/images/I/61p8fxhYxPL._QL85_V1_.jpg'
                alt="banner"
            /> */}

            <div className="home_row">
                {products}
            </div>

            
        </div>
    )
}

export default Home