import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductsCart from '../ProductsCart/ProductsCart';



const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res => res.json())
            .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <div className='my-12'>
            <p className='text-red-600 font-bold text-xl text-center'>Popular Products</p>
                 <h2 className='text-5xl font-bold text-center my-5'>Browse Our Products</h2>
            <p className='w-6/12  mx-auto text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            
            </div>
            <div  className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  md:p-4 md:mx-auto md:8/12 sm:8/12 mx-auto'>
            {
                products.map(product => <ProductsCart
                    key={product.id}
                    product={product}
                ></ProductsCart>)
            }
            </div>
        </div>
    );
};

export default Products;