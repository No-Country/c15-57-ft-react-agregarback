import React from 'react'
import DownSectionElements from '../Presentation/DownSectionElements'
import DownSectionLayout from '../Presentation/DownSectionLayout'
const DownSectionContainer = ({ DownSectionTitle, DownSectionDescription, Certificate }) => {
    return (
        <DownSectionLayout>
            <DownSectionElements
                DownSectionTitle={DownSectionTitle}
                DownSectionDescription={DownSectionDescription}
                Certificate={Certificate}
            />
        </DownSectionLayout>
    )

}

export default DownSectionContainer