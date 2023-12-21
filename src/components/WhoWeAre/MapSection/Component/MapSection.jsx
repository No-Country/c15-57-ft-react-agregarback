import MapSectionContainer from '../Presentation/MapSection'

function MapSection ({ MapSectionTitle, MapSectionOperations, MapSectionDefenders, MapSectionDonations, LatamMap }) {
  return (
    <MapSectionContainer
      LatamMap={LatamMap}
      MapSectionTitle={MapSectionTitle}
      MapSectionOperations={MapSectionOperations}
      MapSectionDefenders={MapSectionDefenders}
      MapSectionDonations={MapSectionDonations}
    />
  )
}

export default MapSection
