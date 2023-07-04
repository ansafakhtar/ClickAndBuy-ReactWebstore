import "./ProductCard.css";
import { Product } from "../../domain/products/types";
import { Link } from "react-router-dom";

type ProductProps = Product;

const ProductCard = (product: ProductProps): JSX.Element => {
    
  return (
    <>
      <div key={product.id} className="product normal">
        <Link
          // onClick={() => window.top(0, 0)}
          to={`/categories/product/${product.id}`}
        >
          <div className="product-header">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="product-details">
            <p>{product.name}</p>
            <p className="item-price">{product.price}$</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
