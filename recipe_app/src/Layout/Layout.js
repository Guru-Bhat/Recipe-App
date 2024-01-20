import { Outlet } from "react-router-dom";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Assets/Styles/common.scss'

export default function Layout(){
    return(
    <div className="layout" >
        <Header />
        <div className="body">
        <Outlet />
        </div>
        <Footer />
    </div>
    )
}