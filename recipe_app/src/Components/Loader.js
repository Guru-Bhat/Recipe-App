import {Spinner} from 'reactstrap'

export default function Loader(show){
    console.log("show",show)
    return(
        <div>
            {show===true &&
            <Spinner
            style={{width: "2rem", height:"2rem"}}
            color="primary"
            >
                Loading...
            </Spinner>
}
        </div>
    )
}