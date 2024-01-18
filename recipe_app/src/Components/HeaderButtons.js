import '../Assets/Styles/common.scss'
import Button from '@mui/material/Button';
import {
    NavLink, Link, useLocation
} from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function HeaderButtons(){
    const location = useLocation();
    const pathSegments = location.pathname.split('/')
    let isOnboardingPage = pathSegments[pathSegments.length - 1] === 'signup' || pathSegments[pathSegments.length - 1] === 'signin'

    const userName = useSelector(state => state.session.userName) || JSON.parse(sessionStorage.getItem("userData"))?.userName || ''

    useEffect(() => {
        console.log('endpoint is', pathSegments[pathSegments.length - 1]);
        console.log(' isOnboardingPage', isOnboardingPage);
        console.log(' userName', userName);
    }, [pathSegments])

    return(
        <>
        <div className={userName ? 'hide' : isOnboardingPage ? 'hide' : 'header-buttons'}>
        <Link to="recipe/signup">
            <Button variant="contained" className='button'>SignUp</Button>
        </Link>
        <Link to="recipe/signin">
            <Button variant="outlined" className='button'>SignIn</Button>
        </Link>
    </div>
        </>
    )
}