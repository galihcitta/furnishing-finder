import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
    return (
       <div className="product-list">
        <div className="container">
            <div className="row">
                {products.map((product,i) => 
                    <div key={i} className="product-col">
                        <ProductCard {...product} />
                    </div>
                )}
            </div>
        </div>
       </div>
    )
}

export default ProductList