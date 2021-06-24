import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="brand">SMPLaces</NavLink>
    </div>
  )
}
