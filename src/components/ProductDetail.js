import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';
import { AmazonUseContext } from './StateProvider';

const baseURL = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

function ProductDetail() {
    const [details, setDetails] = useState();
    const [{ user, cart }, dispatch] = AmazonUseContext();
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`${baseURL}/${id}`).then((response) => {
            setDetails({ ...response.data, quantity: 1 });
            console.log();
        });
    }, [])
    function addToBasket() {
        if (details) {
            dispatch({
                type: 'ADD_TO_CART',
                item: { ...details }
            });
        }


    }

    function buyNow() {
        if (details) {
            dispatch({
                type: 'ADD_TO_CART',
                item: { ...details }
            });
            navigate('/checkout', { replace: true });
        }
    }

    return (
        <div className="description">
            <div className="description_row">
                <div className="description_col">
                    <div className="description_slider">
                        <div className="description_product">
                            <img className="description_product_image selected" src={details?.image} alt="" />
                        </div>
                        <div className="description_preview">
                            <img src={details?.image} id="imagebox" alt="" />
                        </div>
                    </div>
                </div>
                <div className="description_col details">

                    <div className="description_content">
                        <p className="description_brand">By: <span className="description_brand_name">Lorem</span></p>
                        <h4 className="description_title">{details?.title}</h4>
                        <div className="description_price">
                            <span className="description_price_currency">$</span>
                            <span className="description_price_integer">{details?.price && Math.floor(details?.price - 0)}</span>
                            <span className="description_price_decimal"> {details?.price && Math.floor((details?.price - Math.floor(details?.price - 0)) * 100)}</span>
                            <span className="description_price_stock">In stock</span>
                        </div>

                        <div className="description_rating">
                            <div className="description_rating_star">
                                {details && Array(Math.floor(details?.rating.rate - 0))
                                    .fill()
                                    .map((_, i) => (
                                        <i key={i} className="fa fa-star"></i>
                                    ))}

                            </div>
                            <div className="description_post">
                                <div className="description_post_arrow"></div>
                                <span className="description_post_number">{details?.rating.count} ratings</span>
                            </div>
                        </div>

                        <div className="description_size">
                            <div className="description_size_type">Size</div>
                            <div className="description_size_option">
                                <div className="description_size_option_value outStock">4 UK</div>
                                <div className="description_size_option_value">4 UK</div>
                                <div className="description_size_option_value">4 UK</div>
                                <div className="description_size_option_value ">4 UK</div>
                                <div className="description_size_option_value selected_size">4 UK</div>
                            </div>
                        </div>
                        <div className="description_quantity">
                            <div className='description_quantity_title'>Quantity</div>
                            <div className='description_quantity_btn'>
                                <button
                                    className='description_quantity_increment'
                                    onClick={() => { details && setDetails({ ...details, quantity: details?.quantity + 1 }) }}
                                >+</button>

                                <input
                                    className='description_quantity_input'
                                    value={details?.quantity || 1}
                                    disabled />

                                <button
                                    className='description_quantity_decrement'
                                    onClick={() => { details && setDetails({ ...details, quantity: details?.quantity - 1 }) }}
                                    disabled={details?.quantity === 1 ? true : false}
                                >-</button>

                            </div>
                        </div>
                        <div className="description_button">
                            <Link to={'/checkout'}>
                                <button className="description_button_addCart" type="button" onClick={buyNow} >
                                    Add to cart
                                </button>
                            </Link>
                            <button className="description_button_buyNow" type="button" onClick={addToBasket}>
                                Buy now
                            </button>

                        </div>
                        <div className="description_line"></div>
                        <p className="description_para">
                            {details?.description}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetail