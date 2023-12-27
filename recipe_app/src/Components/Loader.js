import {Spinner} from 'reactstrap'

export default function Loader(show){
    console.log("show",show.show)
    return(
        <div>
            {show.show===true &&
            <Spinner
            color="primary"
            >
                Loading...
            </Spinner>
}
        </div>
    )
}