import { DropDownLayout } from './DropDownLayout.jsx'
import { DropDownLinks } from './DropDownLinks.jsx'
  
export const DropDownContainer = ({routes}) => {
  return (
    <DropDownLayout>
      <DropDownLinks routes={routes} />
    </DropDownLayout>
  )
}
