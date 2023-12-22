import { DropDownLayout } from './DropDownLayout.jsx'
import { DropDownLinks } from './DropDownLinks.jsx'

export const DropDownContainer = ({ routes, windowSize }) => {
  return (
    <DropDownLayout>
      <DropDownLinks
        windowSize={windowSize}
        routes={routes}
      />
    </DropDownLayout>
  )
}
