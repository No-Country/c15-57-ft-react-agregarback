import React from 'react'
import useRouterChecker from '../../../../Hooks/useRouterChecker'

const CartCounterElement = () => {
  const { animalRouterChecker } = useRouterChecker()
  return <div className={`
  ${animalRouterChecker 
    ? 'text-black'
    : 'text-white'
  }
  text-center pb-[1%] relative text-center bottom-[0.3vh]`
  } >1</div>
}

export default CartCounterElement