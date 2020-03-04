import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './ViewProduct.css';

const ViewProduct = (props) => {
    const {id} = useParams();
    
    return(
        <div className="ViewProduct">
            <h3>ID: {id}</h3>
            <h3>Name: </h3>
            <h3>EAN: </h3>
            <h3>Type: </h3>
            <h3>Weight (g): </h3>
            <h3>Color: </h3>
            <h3>Active: </h3>
        </div>
    )
}

export default ViewProduct;