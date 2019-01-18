import React, { Component } from 'react';
import './App.css';
import ProductsContainer from "./containers/ProductsContainer";
class App extends Component {
  render() {
    return (
      <div className="Aida-Cart">
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
