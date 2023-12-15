import { Outlet } from "react-router-dom";
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Layout(){
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}