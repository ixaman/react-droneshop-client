import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../About/Product/Product';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
            <h1 className="mt-5">Latest Prducts</h1>
            <div className="container my-5 grid-cls">
                {
                    products.map( product => <Product
                        key={product.id}
                        product = {product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;