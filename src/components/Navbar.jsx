import { Link } from "react-router-dom"
import '../style/navbar.css'



const Navbar = () => {
  return (
    <div  className="navbar">
      <Link to="/">Home</Link>
      <Link to="/activity">Activity</Link>
    </div>
  )
}
export default Navbar