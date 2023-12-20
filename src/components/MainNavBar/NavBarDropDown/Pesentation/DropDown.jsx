import { DropDownLayout } from './DropDownLayout.jsx'
import { DropDownLinks } from './DropDownLinks.jsx'

const routes = [{
  name: 'Mi Perfil',
  path: '/User'
}
]
export const DropDownContainer = () => {
  return (
    <DropDownLayout>
      <DropDownLinks routes={routes} />
    </DropDownLayout>
  )
}
