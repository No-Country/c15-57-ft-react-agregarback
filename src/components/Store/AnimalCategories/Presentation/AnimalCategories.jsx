import React from 'react'
import AnimalCategoriesElements from './AnimalCategoriesElements'
import AnimalCategoriesLayout from './AnimalCategoriesLayout'


function AnimalCategoriesContainer({ animals, jaguar }) {
  return (
    <AnimalCategoriesLayout>
      <AnimalCategoriesElements animals={animals} jaguar={jaguar} />
    </AnimalCategoriesLayout>
  )
}

export default AnimalCategoriesContainer