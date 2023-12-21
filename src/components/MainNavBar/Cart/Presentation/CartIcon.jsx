import useRouterChecker from "../../../../Hooks/useRouterChecker";

export const CartIcon = ({ icon }) => {
  const { animalRouterChecker } = useRouterChecker();
  const CurrentIcon = icon;
  return (

  <CurrentIcon
    className={`
    ${animalRouterChecker ? 'text-white' : 'text-black'} 
   h-[1rem] w-[1rem] md:w-[1rem] md:h-[1rem] lg:w-[1.5rem] lg:h-[1.5rem] 2xl:w-[2rem] 2xl:h-[2rem]
    `}
  />

  );
};
