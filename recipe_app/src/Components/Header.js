import { Navbar } from 'reactstrap';
import logo from '../Assets/images/logo.PNG'
import '../Assets/Styles/common.scss'
import UserProfile from "./UserProfile"
import HeaderButtons from './HeaderButtons';

export default function Header() {

    return (
        <div className='navBar' >
<div className='left'>
            <img alt='logo' src={logo} className='logo' ></img>
            </div>
<div className='right'>
            <HeaderButtons />

            <UserProfile />
            </div>
            
        </div>

    )
}