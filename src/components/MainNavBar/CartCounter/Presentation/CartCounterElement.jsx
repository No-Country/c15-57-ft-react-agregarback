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
  text-center font-robotoM text-[1vh] relative lg:text-[2vh] lg:bottom-[.3vh] 2xl:text-[1.5vh] 2xl:bottom-[0vh]
  `}
    >
      {totalCounting}
    </div>
  )
}

export default CartCounterElement
