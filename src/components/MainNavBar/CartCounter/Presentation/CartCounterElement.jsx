import React from 'react'
import useRouterChecker from '../../../../Hooks/useRouterChecker'
import { useContentContext } from '../../../../Store/contextStore/ContentContext'

const CartCounterElement = () => {
  const { animalRouterChecker } = useRouterChecker()
  const { totalCounting } = useContentContext()
  return (
    <div className={`
  ${animalRouterChecker
    ? 'text-black'
    : 'text-white'
  }
  relative pb-[1%]   text-center bottom-[0.3vh]`}
    >
      {totalCounting}
    </div>
  )
}

export default CartCounterElement
