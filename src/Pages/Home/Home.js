import React from 'react';
import useProducts from '../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Reason from '../Reason/Reason';
import ReviewSection from '../ReviewSection/ReviewSection';
import './Home.css';

const Home = () => {
    const {products} = useProducts();
    const homeProducts =  products.slice(0,6)
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-5">Latest Prducts</h1>
            <div className="container my-5 grid-cls">
                {
                    homeProducts.map( product => <Product
                        key={product._id}
                        product = {product}
                    ></Product>)
                }
            </div>
            <Reason></Reason><br /><br />
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;