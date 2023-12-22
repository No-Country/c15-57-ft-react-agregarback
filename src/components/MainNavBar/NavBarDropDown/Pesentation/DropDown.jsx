import { DropDownLayout } from './DropDownLayout.jsx'
import { DropDownLinks } from './DropDownLinks.jsx'

export const DropDownContainer = ({ routes, windowSize }) => {
  return (
    <DropDownLayout windowSize={windowSize}>
      <DropDownLinks
        routes={routes}
      />
    </DropDownLayout>
  )
}
