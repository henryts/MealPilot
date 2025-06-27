
import { Link } from "react-router-dom";


export const HEADER = () => 
    {
    return (
  <div>
    <div className="logoContainer">

        <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg?w=768" alt="Logo" />

    </div>
    <div className="navBar">
      <div><Link  to ="/home"> Home</Link></div>
      <div>
        <Link  to ="/about"> About</Link>
       </div>
      <div><Link  to ="/support"> Support</Link></div>
      <div><Link  to ="/map"> Map</Link></div>
    </div>
  </div>

    )
    };
