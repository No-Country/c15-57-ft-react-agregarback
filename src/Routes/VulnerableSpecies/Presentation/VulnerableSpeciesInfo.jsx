

import VulnearableCarrousel from '../../../components/VulnerableSpecies/CarrouselButtonSection/Container/ButtonCarrouselSection'
import VulnerableDonationSection from '../../../components/VulnerableSpecies/VulnerableDonationSection/Container/VulnerableDonationSection'
import VulnerableHabitadSection from '../../../components/VulnerableSpecies/VulnerableHabitatSection/Container/VulnerableHabitadSection'

import { habitat1, habitat2, habitat3, habitat4, habitat5 } from '../../../assets/vulnerableSpecies'

export default function VulnerableSpeciesInfo() {

  return (
    <>

      <VulnearableCarrousel />

      <VulnerableDonationSection />

      <VulnerableHabitadSection
             habitat1={habitat1}
             habitat2={habitat2}
             habitat3={habitat3}
             habitat4={habitat4}
             habitat5={habitat5}
      />

    </>
  )
}
