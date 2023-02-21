import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div>
            <h1 className='text-2xl font-bold text-orange-600'> Popular Products {products.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => {
                        return <ItemCard key={product._id} product={product}></ItemCard>
                    })
                }
            </div>
        </div>
    );
};

export default Products;