import { Link } from "react-router-dom"

const CardsStore = ({ props }) => {
    const { id, name, img, titular, detalle } = props
    return (
        <>
            <ul key={id}>
                <h4>{name}</h4>
                <img src={img} style={{ width: "29vw", height: "12vh" }} alt="" />
                <h6>{titular}</h6>
                <h5>{detalle}</h5>
                <Link to={`/Store/${id}`}>{titular}</Link>
            </ul>

        </>
    )

}

export default CardsStore








