import React from 'react'
import VulnerableHabitadLayout from './VulnerableHabitadLayout'
import VulnerableHabitadElements from './VulnerableHabitadElements'

function VulnerableHabitadSectionContainer({ habitat1, habitat2, habitat3, habitat4, habitat5 }) {
  return (
    <VulnerableHabitadLayout>
        <VulnerableHabitadElements 
             habitat1={habitat1}
             habitat2={habitat2}
             habitat3={habitat3}
             habitat4={habitat4}
             habitat5={habitat5}
        />
    </VulnerableHabitadLayout>
  )
}

export default VulnerableHabitadSectionContainer