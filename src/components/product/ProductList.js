import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
    return (
       <div className="product-list">
        <div className="container">
            <div className="row">
                {products.map(product => 
                    <div key={product}>
                        <ProductCard {...product} />
                    </div>
                )}
            </div>
        </div>
       </div>
    )
}

export default ProductList