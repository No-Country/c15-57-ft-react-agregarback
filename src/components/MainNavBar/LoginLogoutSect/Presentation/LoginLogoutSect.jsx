import { LoginLogoutSectLayout } from './LoginLogoutSectLayout.jsx'
import { LoginLogoutSectElement } from './LoginLogoutSectElement.jsx'
import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'
export const LoginLogoutSectContainer = ({ routes }) => {
  return (
    <LoginLogoutSectLayout>
      <LoginLogoutSectElement routes={routes} />
    </LoginLogoutSectLayout>
  )
}
