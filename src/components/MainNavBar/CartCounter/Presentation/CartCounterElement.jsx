import React from 'react'
import useRouterChecker from '../../../../Hooks/useRouterChecker'
import { useECommerceContext } from '../../../../Store/contextStore/ECommerceContext'

const CartCounterElement = () => {
  const { animalRouterChecker } = useRouterChecker()
  const { cartContainCounter } = useECommerceContext()
  return (
    <div className={`
  ${animalRouterChecker
        ? 'text-black'
        : 'text-white'
      }
  relative pb-[1%]   text-center bottom-[0.3vh]`}
    >
      {cartContainCounter}
    </div>
  )
}

export default CartCounterElement
