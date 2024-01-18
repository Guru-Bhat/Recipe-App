import { Navbar } from 'reactstrap';
import logo from '../Assets/images/logo.PNG'
import '../Assets/Styles/common.scss'
import UserProfile from "./UserProfile"
import HeaderButtons from './HeaderButtons';

export default function Header() {

    return (
        <Navbar className='navBar' >

            <img alt='logo' src={logo} className='logo' ></img>

            <HeaderButtons />

            <UserProfile />

        </Navbar>

    )
}