import React from 'react'

import DonationsLayout from './DonationsLayout'
import DonationsInfo from './DonationsInfo'

const Donations = ({ info }) => {
console.log(info);
    return (
        <DonationsLayout>
            <DonationsInfo info={info} />
        </DonationsLayout>)
}

export default Donations