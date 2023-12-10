import  CardsStore  from "./CardsStore"
import CardStoreLayout from "./CardStoreLayout"
const CardStore = ({props}) => {
    return (
        <CardStoreLayout>
          <CardsStore props={props} />
        </CardStoreLayout>
    )

}

export default CardStore