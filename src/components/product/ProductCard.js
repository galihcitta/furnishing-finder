import React from 'react'
import { convertIDR,summaryDescription } from '../../utils/utils'

const ProductCard = ({ name, description, furniture_style, delivery_time, price }) => {
    return (
        <div className="product-card">
            <div className="card-header">
                <div className="card-name">
                    {name}
                </div>
                <div className="card-price">
                    {convertIDR(price)}
                </div>   
            </div>
            <div className="card-body">
                <p className="card-description">
                    {summaryDescription(description)}
                </p>
                <div className="card-styles">
                    {furniture_style.map((style, i) => 
                        <span key={i}>
                            {style + ' '}
                        </span>
                    )}
                </div>
            </div>
            <div className="card-footer">
                <div className="card-delivery-time">
                    {delivery_time} days
                </div>
            </div>
        </div>
    )
}

export default ProductCard