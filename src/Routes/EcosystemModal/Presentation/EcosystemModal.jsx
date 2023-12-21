import EcosystemLayout from './EcosystemLayout'
import EcosystemElements from './EcosystemElements'
function EcosystemModalContainer ({ post }) {
  return (
    <EcosystemLayout>
      <EcosystemElements
        post={post}
      />
    </EcosystemLayout>
  )
}

export default EcosystemModalContainer
