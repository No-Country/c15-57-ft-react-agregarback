
import React from 'react'
import EcosystemLayout from './EcosystemLayout'

function EcosystemModalContainer({post}) {
  return (
    <EcosystemLayout>
      <EcosystemElements
      post={post}
      />
    </EcosystemLayout>
  )
}

export default EcosystemModalContainer
