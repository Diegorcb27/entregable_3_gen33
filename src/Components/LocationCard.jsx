import "./styles/LocationCard.css"


/**
 *- Nombre de la location.
  - Tipo de location.
  - Dimensión a la que pertenece esa location.
  - Cantidad de residentes que tiene la location.
 *  
 */
const LocationCard = ({location}) => {

    return(
        <div className="Location_container">
            <article className="Location">
            <h2 className="Location_title">{location?.name}</h2>
            <ul className="Location_list">
                <li className="Location_item"><span className="Location_label">Type: </span><span className="Location_value">{location?.type}</span></li>
                <li className="Location_item"><span className="Location_label">Dimension: </span><span className="Location_value">{location?.dimension}</span></li>
                <li className="Location_item"><span className="Location_label">Population: </span><span className="Location_value">{location?.residents?.length}</span></li>
            </ul>
            </article>
        </div>
        




    )



}

export default LocationCard