import React from 'react'
import useRouterChecker from '../../../../Hooks/useRouterChecker'

const CartCounterLayout = ({ children }) => {
  const { animalRouterChecker } = useRouterChecker()

  return (
    <div className={`
    w-[4.5vw] h-[1.5vh] min-[509px]:w-[3vw]  sm:w-[3vw] sm:h-[2vh] sticky rounded-full md:h-[2vh] md:w-[2vw] md:right-[1vw] md:top-[3vh] lg:right-[.8vw] lg:w-[2.5vw] lg:h-[2.5vh] 2xl:h-[2vh] 2xl:w-[1.4vw] 2xl:right-[1vw] 2xl:top-[3vh]
    ${animalRouterChecker
        ? 'bg-lime-200'
        : 'bg-black'
      }
     `}>
      {children}

    </div>
  )
}

export default CartCounterLayout