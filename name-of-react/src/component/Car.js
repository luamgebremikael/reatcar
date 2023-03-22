import { Link } from "react-router-dom"


export default function Car(props) {
    return (
        <div className="car">
           
            <p>{props.car.year}</p>
            <p>{props.car.selling_Price}</p>
            <p>{props.car.owner}</p>
            <p>{props.car.fuel}</p>
            <p>{props.car.seats}</p>
            {
                (props.hideLink) ?
                <></> :
            
            <Link to={`/car/${props.car.id}`}>Read More</Link>
}
        </div>
    )
}