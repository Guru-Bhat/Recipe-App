import routes from "../Routes/RoutesList"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="footer">
            <div >
            <Link  className="links" to={routes.home_page} >Home </Link>
            </div>
            
            <div>
            <Link  className="links" to={routes.about_us}>About us</Link>
            </div>
            
            <div>
            <Link  className="links" href='/'>Contact us</Link>
            </div>
            
            
        </div>
    )
}