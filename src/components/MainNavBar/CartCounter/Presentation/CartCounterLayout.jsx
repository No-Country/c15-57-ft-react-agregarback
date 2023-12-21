import React from 'react'
import useRouterChecker from '../../../../Hooks/useRouterChecker'

const CartCounterLayout = ({ children }) => {
  const { animalRouterChecker } = useRouterChecker()

  return (
    <div className={`
    w-[2vw] h-[3vh] sticky rounded-full md:h-[2vh] md:right-[1vw] md:top-[3vh] lg:right-[.8vw] lg:w-[2.5vw] lg:h-[2.5vh] 2xl:h-[2vh] 2xl:w-[1.4vw] 2xl:right-[1vw] 2xl:top-[3vh]
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

{/*
right-[11vw] rounded-full absolute bottom-[5vh] sm:w-[3vw] sm:right-[-4.8vw] sm:bottom-[3vh] md:w-[] md:right-[] md:bottom-[]  lg:right-[-1vw] 2xl:right-[-1vw]
sm:w-[3vw]  sm:right-[-5.8vw] sm:top-[] md:w-[] md:right-[] md:top-[-1vh]  lg:right-[-.5 vw] lg:top-[-1.5vh] 2xl:right-[-1vw]
*/}
