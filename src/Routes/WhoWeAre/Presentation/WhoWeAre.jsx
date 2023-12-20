import React from 'react'
import WhoWeAreLayout from './WhoWeAreLayout'
import WhoWeAreInfo from './WhoWeAreInfo'

const WhoWeAreContainer = ({ data }) => {
  return (
    <WhoWeAreLayout>
      <WhoWeAreInfo data={data} />

    </WhoWeAreLayout>
  )
}

export default WhoWeAreContainer
