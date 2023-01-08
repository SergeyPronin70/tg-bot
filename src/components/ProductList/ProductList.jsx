import React, { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css'

const products = [
    {id: 1, title: 'Геральт из Ривии', price: 10000, description: 'Ватная игрушка Геральт из Ривии'},
    {id: 2, title: 'Джофри Баратеон', price: 1000, description: 'Ватная игрушка Джофри'},
    {id: 3, title: 'Валера', price: 19000, description: 'Ватная игрушка Валера, время которого настало'},
    {id: 4, title: 'Зигмунд', price: 90000, description: 'Ватная игрушка Зигмунд Усы Таракана'},
]

const ProductList = (props) => {
    const [addedItems, setAddedItems] = useState([])

    const onAdd = (product) => {
        
    }

    return (
        <div className={'list'}>
            {products.map(item => 
                <ProductItem 
                product={item}
                className={'item'}
                onAdd={onAdd}
                />
                )}
        </div>
    )
}

export default ProductList;