import React from 'react'

import WhoWeAreLayout from './WhoWeAreLayout'
import WhoWeAreInfo from './WhoWeAreInfo'

const WhoWeAre = ({ info }) => {
console.log(info);
    return (
        <WhoWeAreLayout>
            <WhoWeAreInfo info={info} />
        </WhoWeAreLayout>)
}

export default WhoWeAre