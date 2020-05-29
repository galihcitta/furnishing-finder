import React, { useState } from 'react'
import ProductList from '../product/ProductList'
import FilterContainer from '../filter/FilterContainer'

const Furniture = ({ products, furnitureStyles, deliveryTimes }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedStyles, setSelectedStyles] = useState([])
    const [selectedDeliveryTimes, setselectedDeliveryTimes] = useState([])

    const onSearchTerm = e => {
        setSearchTerm(e.target.value);
    }
    const onSelectedStyles = e => {
        setSelectedStyles(e)
    }
    const onSelectedDeliveryTimes = e => {
        setselectedDeliveryTimes(e)
    }

    const filteredProducts = products.filter(product => {
        const filterBySearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const filterByStyles = selectedStyles.length ? selectedStyles.some(style => product.furniture_style.indexOf(style.value) !== -1) : true;
        const filterByDeliveryTimes = selectedDeliveryTimes.length ? selectedDeliveryTimes.some(time => parseInt(product.delivery_time) <= parseInt(time.value)) : true;
        return filterBySearchTerm && filterByStyles && filterByDeliveryTimes;
    });

    return (
        <div>
        <FilterContainer
        furnitureStyles={furnitureStyles}
        deliveryTimes={deliveryTimes}
        searchTerm={searchTerm}
        selectedStyles={selectedStyles}
        selectedDeliveryTimes={selectedDeliveryTimes}
        onSearchTerm={onSearchTerm}
        onSelectedStyles={onSelectedStyles}
        onSelectedDeliveryTimes={onSelectedDeliveryTimes}
        />
        <ProductList products={filteredProducts} />
        </div>
    )
}

export default Furniture