import { Link } from "react-router-dom";

export interface Category {
  Category: string;
  CategoryID: number
}

interface CategoryProps {
  category: Category
}

const NavItem: React.FC<CategoryProps> = ({ category }) => {
  return (
    <li>
      <Link to="/">{category.Category}</Link>
    </li>
  )
}

export default NavItem
