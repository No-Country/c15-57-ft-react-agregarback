import React from 'react'
import MapSectionLayout from '../Presentation/MapSectionLayout'
import MapSectionElements from '../Presentation/MapSectionElements'
function MapSectionContainer({ MapSectionTitle, MapSectionOperations, MapSectionDefenders, MapSectionDonations, LatamMap }) {
    return (
        <MapSectionLayout>
            <MapSectionElements
                LatamMap={LatamMap}
                MapSectionTitle={MapSectionTitle}
                MapSectionOperations={MapSectionOperations}
                MapSectionDefenders={MapSectionDefenders}
                MapSectionDonations={MapSectionDonations}
            />
        </MapSectionLayout>
    )
}

export default MapSectionContainer