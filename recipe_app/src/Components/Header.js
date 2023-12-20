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

export default function Header(){
    return(
        // <div >
            <Navbar >
                <div className='navBar'>
                <img alt='logo' src={logo} className='logo' ></img>
                <div style={{display:'inline-block'}}>
                    {/* <p>profile dropdown</p> */}
                </div>
                </div>
            </Navbar>
            
        // </div>
    )
}