import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
import logo from '../Assets/images/logo.PNG'
import '../Assets/Styles/common.scss'
import UserProfile from "./UserProfile"

export default function Header(){
    return(
        // <div >
            <Navbar className='navBar' >
                {/* <div className='navBar'> */}
                <img alt='logo' src={logo} className='logo' ></img>
                    {/* <p>profile dropdown</p> */}
                    <UserProfile />
               
                {/* </div> */}
            </Navbar>
            
        // </div>
    )
}