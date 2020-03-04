import React, { Component, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import NewProduct from './components/NewProduct/NewProduct';
import EditProduct from './components/EditProduct/EditProduct';
import ViewProduct from './components/ViewProduct/ViewProduct';

class App extends Component {
  state = {
    data: JSON.parse(localStorage.getItem('products')),
    showProducts: false
  }

  toggleProductsHandler = () => {
    const doesShow = this.state.showProducts;
    this.setState({showProducts: !doesShow});
  }

  createProductHandler = (product, e) => {
    const data = [...this.state.data, product]
    this.setState({data: data})
    localStorage.setItem('products', JSON.stringify(data));
  }

  deleteProductHandler = (id, e) => {
    const data = this.state.data;
    const filterData = data.filter((product) => {
      if (id === product.id) {
      return false }
      else {
        return true
      }
    })
    console.log(filterData)
    this.setState({data: filterData})
    localStorage.setItem('products', JSON.stringify(filterData));
  }

  createProductHandler = (product, e) => {
    const data = [...this.state.data, product]
    this.setState({data: data})
    localStorage.setItem('products', JSON.stringify(data));
  }

  render() {
    return (
      <Router>
        <div className="Menu">
          <ul>
            <li>
              <Link className="MenuItems" to="/">HOME</Link>
            </li>
            <li>
              <Link className="MenuItems" to="/products">PRODUCTS</Link>
            </li>
            <li>
              <Link className="MenuItems" to="/products/create">CREATE</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <div className="App">
                <header className="App-header">
                  <h1>Warehouse</h1>
                  <p>Please press the button below to display products</p>
                  <Link to="/products"><button href="/products" id="display" onClick={this.toggleProductsHandler}>Check available products</button></Link>
                </header>
              </div>
            </Route>
            <Route exact path="/products">
              <Products 
              data={this.state.data}
              deleteProduct={this.deleteProductHandler}
              />
            </Route>
            <Route exact path="/products/create">
              <NewProduct
              data={this.state.data} 
              createProduct={this.createProductHandler}
              />
            </Route>
            <Route path="/products/:id" render={(props) => 
              <ViewProduct products={this.state.products} {...props}/>}
            ></Route>  
            <Route exact path="/products/:id/edit" render={(props) => 
              <EditProduct products={this.state.products} {...props}/>}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
