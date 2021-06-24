
import { Link } from 'react-router-dom';

import convertToSlug from '../utils/convertToSlug';

export interface Product {
  Name: string;
  Price: number;
  RetailPrice: number;
  ThumbnailURL: string;
  ProductID: number
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const slug = convertToSlug(product.Name)
  return (
    <aside className="card">
      <div className="card-body product">

        <div className="content-details">
          <img src={product.ThumbnailURL} alt={product.Name} />
          <div className="details">
            <h2>{product.Name}</h2>
            <div className="price">
              <span>${product.Price}</span>
              <span className="price--retail"><del>${product.RetailPrice}</del></span>
            </div>
          </div>
        </div>

        <Link to={`/product/${product.ProductID}/${slug}`} className="btn btn--action">View Details</Link>
      </div>
    </aside>
  )
}

export default ProductItem
