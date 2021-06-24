import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          Welcome SMPLaces
          <span>Ecommerce with the best products</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat consequuntur omnis, 
          ipsam at exercitationem enim? Numquam dolore tempora quisquam suscipit repellat, consequatur 
          quis est nostrum ratione labore ullam sed.
        </p>

        <div className="content">
          <Link to="/" className="btn btn--action">Login</Link>
          <Link to="/" className="btn btn--secondary">Register</Link>
        </div>

      </div>
    </header>
  )
}
