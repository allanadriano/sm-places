import { Route } from 'react-router-dom';
import ProductPage from './pages/Product/Index';
import ProductDetailPage from './pages/Product/ProductDetail';

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={ProductPage} />
      <Route path="/product/:id/:slug" component={ProductDetailPage} />
    </>
  )
}
