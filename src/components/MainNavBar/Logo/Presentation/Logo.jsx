import { LogoLayout } from './LogoLayout.jsx'
import { LogoElements } from './LogoElements.jsx'

export const LogoContainer = ({ props }) => {
  return (
    <LogoLayout>
      <LogoElements props={props} />
    </LogoLayout>
  )
}
