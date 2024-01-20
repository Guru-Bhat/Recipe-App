import { Navbar } from 'reactstrap';
import logo from '../Assets/images/logo.PNG'
import '../Assets/Styles/common.scss'
import UserProfile from "./UserProfile"
import HeaderButtons from './HeaderButtons';
import { useNavigate } from 'react-router-dom';
import routes from '../Routes/RoutesList';

export default function Header() {

    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate(routes.home_page)
    }

    return (
        <div className='navBar' >

            {/* <Link to='/recipe/homepage' style={{display:'inline'}}> */}
            <div className='left'>
                <img alt='logo' src={logo} className='logo' onClick={navigateToHomePage}></img>
            </div>
            {/* </Link> */}

            <div className='right'>
                <HeaderButtons />

                <UserProfile />
            </div>

        </div>

    )
}