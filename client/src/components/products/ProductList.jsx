import React from "react";
import * as styles from "./ProductList.css";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.productGrid}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              brand={product.brand}
              color={product.color}
              price={product.price}
              category={product.category}
              size={product.size}
              onSale={product.onSale}
              isAvailable={product.isAvailable}
              image={product.image}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
