import React from 'react';
import FilterSection from './components/FilterSection';
import Sort from './components/Sort';
import ProductList from './components/ProductList';

const Store = () => {

  return (
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>

      <div className="product-view--sort">
        <div className="sort-filter">
          <Sort />
        </div>

        <div className="main-product">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Store
