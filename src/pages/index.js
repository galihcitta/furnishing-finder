import React, { useState, useEffect} from 'react'
import Furniture from '../components/furniture/Furniture'
import { deliveryTimes } from '../utils/utils'

const IndexPage = () => {
    const [products, setProducts] = useState([])
    const [furnitureStyles, setFurnitureStyles] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await fetch(process.env.REACT_APP_API_ENDPOINT)
            const data = await res.json()
            const {
                furniture_styles,
                products
              } = data;
            setProducts(products)
            setFurnitureStyles(furniture_styles.map((style) => ({
                label: style,
                value: style
            })))
        }
        catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div>Fabelio Furniture Page</div>
            <Furniture products={products} furnitureStyles={furnitureStyles} deliveryTimes={deliveryTimes} />
        </div>
    )
}

export default IndexPage