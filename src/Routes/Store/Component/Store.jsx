import { useLoaderData } from "react-router-dom";
import axios from 'axios';

import CardStoreContainerCard from "../../../components/StoreCard/Component/CardStore";

export default function Store() {

    const { animalInfo } = useLoaderData();

    return (
        <li>
            {
                animalInfo !== undefined ? (
                    animalInfo.map((item) => (
                        <CardStoreContainerCard key={item.id} props={item} />
                    ))
                ) : (
                    <p>loading</p>
                )}
        </li>
    );
}

export const loaderStoreItems = async () => {
    const animals = await axios.get(`api/animals`);
    const animalInfo = animals.data.animals;

    return { animalInfo };
};
