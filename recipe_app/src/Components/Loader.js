import {Spinner} from 'reactstrap'
import CircularProgress from '@mui/material/CircularProgress';
import '../Assets/Styles/common.scss'

export default function Loader(show){
    console.log("show",show.show)
    return(
        <div className='center-loader'>
            {show.show===true &&
            <CircularProgress/>
}
        </div>
    )
}