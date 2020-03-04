import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = (props) => {
    return (
        <table className="Products">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>EAN</th>
                    <th>Type</th>
                    <th>Weight (g)</th>
                    <th>Color</th>
                    <th>Active</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.ean}</td>
                            <td>{product.type}</td>
                            <td>{product.weight}</td>
                            <td>{product.color}</td>
                            <td><label><input type="checkbox"></input></label></td>
                            <td>
                            <Link to={'/products/'+product.id}>
                            <button className="View">View</button>
                            </Link>
                            </td>
                            <td>
                            <Link to={'/products/'+product.id+'/edit'}>
                            <button className="Edit">Edit</button>
                            </Link>
                            </td>
                            <td><button onClick={() => props.deleteProduct(product.id)} className="Delete">Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default Products;