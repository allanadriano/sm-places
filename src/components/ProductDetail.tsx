import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import Alert from '../components/Alert';

export interface Product {
  Name: string;
  Brand: string;
  Badges: string;
  Color: string;
  RatingAvg: number;
  Description: string;
  Price: number;
  RetailPrice: number;
  ProductID: number;
  PictureURL: string
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {

  const [alertVisible, setAlertVisible] = useState(false)

  function toggleAlertVisible() {
    setAlertVisible(alertVisible => !alertVisible)
  }

  return (
    <>
      <div className="card breadcrumb">
        <div className="card-body">
          <Link to="/">Products</Link>
          <span>/</span>
          {product.Name}
        </div>
      </div>

      <div className="card position-relative">
        <div className="card-body product-detail">

          <div className="content-details image">
            <div className="content-image">
              <img src={product.PictureURL} alt={product.Name} />
              {product.Badges.length > 0 &&
                <span className="badge left">{product.Badges}</span>
              }
              <span className="badge right">Free Shipping</span>
            </div>
            <p><b>Brand:</b> {product.Brand}</p>
            <p><b>Color:</b> {product.Color}</p>
          </div>

          <div className="content-details text">
            <h1>{product.Name}</h1>

            <StarRatings
              rating={product.RatingAvg}
              starRatedColor="#FFC312"
              numberOfStars={5}
              name='rating'
              starDimension="22px"
              starSpacing="4px"
          />

            <p>{product.Description}</p>
          </div>

          <div className="content-details shop">
            <div className="price">
              <span>${product.Price}</span>
              <span className="price--retail"><del>${product.RetailPrice}</del></span>
            </div>

            <p>In of Stock</p>

            <button className="btn btn--action" onClick={toggleAlertVisible}>Add to Cart</button>

          </div>

        </div>

        {alertVisible && <Alert message="Product added successfully!"/>}

      </div>
    </>
  )
}

export default ProductDetail
