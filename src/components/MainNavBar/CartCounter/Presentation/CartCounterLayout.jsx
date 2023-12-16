import React from 'react'
import useRouterChecker from '../../../../Hooks/useRouterChecker'

const CartCounterLayout = ({ children }) => {
  const { animalRouterChecker } = useRouterChecker()

  return (
    <div className={`
    ${animalRouterChecker
        ? 'bg-lime-200 w-[4vw] h-[2vh] right-[11vw] rounded-full absolute bottom-[5vh] sm:w-[3vw] sm:right-[-4.8vw] sm:bottom-[3vh] md:w-[1vw] md:right-[-2vw] md:bottom-[0.9vh]  lg:right-[-1vw] 2xl:right-[-1vw]'
        : 'bg-black absolute rounded-full w-[3vw] h-[2vh] right-[13.2vw] top-[2vh] sm:w-[3vw]  sm:right-[-5.8vw] sm:top-[-1.5vh] md:w-[1vw] md:right-[-1vw] md:top-[-2vh]  lg:right-[-2vw] lg:top-[-1.5vh]  2xl:top-[-.9vh] 2xl:right-[-1vw]'
      }`}
    >
      {children}

    </div>
  )
}

export default CartCounterLayout
