
import AnimalCategoriesContainer from '../Presentation/AnimalCategories'
import jaguar from '../../../../assets/juguar-categories.png'
import useGetData from '../../../../Hooks/useGetData'

function AnimalCategories() {

  const url = 'animalCs'

  const { data } = useGetData(`api/${url}`, 'animalCs')


  return <AnimalCategoriesContainer animals={data} jaguar={jaguar}  />
}

export default AnimalCategories