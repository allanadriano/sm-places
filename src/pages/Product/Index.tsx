import ProductItem, { Product } from '../../components/Product';
import Header from '../../components/Header';
import NavItem, { Category } from '../../components/NavItemCategory';

import productData from '../../data/productList.json';

export default function ProductPage(category: Category) {
  const categoryItem = productData.map((c: Category) => c)
  
  const liItems:any = []
  categoryItem.forEach((item) => {
    const duplicated = liItems.findIndex((liItem: any) => {
      return item.Category == liItem.Category
    }) > -1

    if(!duplicated) {
      liItems.push(item)
    }
  })

  return (
    <div>
      <Header />
      <nav>
        <ul className="container">
          {liItems.map((category: Category, index: any) => {
            return <NavItem key={index} category={category} />
          })}
        </ul>
      </nav>
      <section className="container">
        {productData.map((product: Product, index) => {
          return <ProductItem key={index} product={product} />
        })}
      </section>
    </div>
  )
}
