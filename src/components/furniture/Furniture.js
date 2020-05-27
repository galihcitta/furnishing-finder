import React from 'react'
import ProductList from '../product/ProductList'

const Furniture = ({ products, furnitureStyles, deliveryTimes }) => {

    return (
        <div>
        <ProductList products={products} />
        </div>
    )
}

export default Furniture