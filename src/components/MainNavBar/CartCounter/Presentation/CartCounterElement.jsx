import useRouterChecker from '../../../../Hooks/useRouterChecker'
import { useECommerceContext } from '../../../../Store/contextStore/ECommerceContext'

const CartCounterElement = () => {
  const { animalRouterChecker } = useRouterChecker()
  const { cantidad } = useECommerceContext()
  return (
    <div className={`
  ${animalRouterChecker
    ? 'text-black'
    : 'text-white'
  }
  text-center font-robotoM text-[1vh] relative md:text-[1.5vh] md:bottom-[.1vh] lg:text-[2vh] lg:bottom-[.3vh] 2xl:text-[1.5vh] 2xl:bottom-[0vh]
  `}
    >
      {cantidad}
    </div>
  )
}

export default CartCounterElement
