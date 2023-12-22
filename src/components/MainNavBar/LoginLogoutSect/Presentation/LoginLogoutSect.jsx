import { LoginLogoutSectLayout } from './LoginLogoutSectLayout.jsx'
import { LoginLogoutSectElement } from './LoginLogoutSectElement.jsx'
export const LoginLogoutSectContainer = ({ routes }) => {
  return (
    <LoginLogoutSectLayout>
      <LoginLogoutSectElement routes={routes} />
    </LoginLogoutSectLayout>
  )
}
