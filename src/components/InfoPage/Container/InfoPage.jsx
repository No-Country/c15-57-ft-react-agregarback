import { Link, useLoaderData } from "react-router-dom";
import axios from 'axios';

const InfoPageContainer = () => {
    const { animalInfo } = useLoaderData();
   console.log(animalInfo);
    return "Post";
};

export default InfoPageContainer


export const loaderItem = async ({ params }) => {
    
    const animals = await axios.get(`api/animals/${params.id}`);
    const animalInfo = animals.data.animals;
    logger.info(animalInfo);
    return { animalInfo };
}