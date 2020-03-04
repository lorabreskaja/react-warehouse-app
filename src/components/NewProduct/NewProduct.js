import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import './NewProduct.css';

const NewProduct = () => {
    const [Product, setProduct] = useState(false);
    const onSubmit = e => {
    const products = JSON.parse(localStorage.getItem('products'));

    const newProduct = {
      id: Math.floor(Math.random() * Math.floor(100)),
      name: e.target.name.value,
      ean: e.target.ean.value,
      type: e.target.type.value,
      weight: e.target.weight.value,
      color: e.target.color.value,
      active: e.target.active.checked
    };

    products.unshift(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    setProduct(true);
  };

    return(
        <div className="NewProduct">
           {Product ? <Redirect to="/products" /> : null}
            <h1>Create a new product</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Enter Name</label>
                    <br></br>
                    <input type="text" name="name" className="Input"/>
                </div>
                <div>
                    <label htmlFor="ean">Enter EAN</label>
                    <br></br>
                    <input type="text" name="ean" className="Input"/>
                </div>
                <div>
                    <label htmlFor="type">Enter Type</label>
                    <br></br>
                    <input type="text" name="type" className="Input"/>
                </div>
                <div>
                    <label htmlFor="weight">Enter Weight</label>
                    <br></br>
                    <input type="text" name="weight" className="Input"/>
                </div>
                <div>
                    <label htmlFor="color">Enter Color</label>
                    <br></br>
                    <input type="text" name="color" className="Input"/>
                </div>

                <div>
                    <input type="checkbox" name="active" />
                    <label htmlFor="active">Active</label>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <br></br>
                    <Link to="/products">Return to Product List</Link>
                </div>
            </form>
        </div>
    )
}

export default NewProduct;