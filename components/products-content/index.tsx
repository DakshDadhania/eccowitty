import { useState } from 'react';
import List from './list';

const ProductsContent = () => {  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>All Products</h2>
      </div>
      <List />
    </section>
  );
};
  
export default ProductsContent
  