import { useParams } from 'react-router-dom';
import ProductDetail, { Product } from '../../components/ProductDetail';

import productData from '../../data/productList.json';

export default function ProductDetailPage(product: Product) {
  const { id } = useParams<{ [x: string]: string }>();
  const productSimpleDetail = productData.map((p: Product) => p)
  const productDetail = productSimpleDetail.find(p => p.ProductID === Number(id))
  if(!productDetail) return null
  return (
    <section>
      <div className="container">
        <ProductDetail product={productDetail} />
      </div>
    </section>
  )
}
