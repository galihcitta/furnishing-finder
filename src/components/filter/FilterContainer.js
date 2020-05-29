import React from 'react'
import DropdownFilter from './DropdownFilter'

const FilterContainer = ({ furnitureStyles, 
    deliveryTimes, 
    searchTerm, 
    selectedStyles, 
    selectedDeliveryTimes, 
    onSearchTerm, 
    onSelectedStyles, 
    onSelectedDeliveryTimes }) => {
    return (
        <div className="filter-container">
            <div className="container">
                <div className="row">
                    <div className="product-col">
                        <div className="search-bar">
                            <input
                            type="text"
                            value={searchTerm}
                            onChange={onSearchTerm}
                            placeholder="Search Furniture"
                            />
                        </div>
                    </div>
                    <div className="product-col"></div>
                </div>
                <div className="row">
                <div className="product-col">
                    <DropdownFilter
                    options={furnitureStyles}
                    value={selectedStyles}
                    onDropdownChange={onSelectedStyles}
                    placeholder="Furniture Style"
                    />
                </div>
                <div className="product-col">
                    <DropdownFilter
                    options={deliveryTimes}
                    value={selectedDeliveryTimes}
                    onDropdownChange={onSelectedDeliveryTimes}
                    placeholder="Delivery Time"
                    />
              </div>
                </div>
            </div>
        </div>
    )
}

export default FilterContainer