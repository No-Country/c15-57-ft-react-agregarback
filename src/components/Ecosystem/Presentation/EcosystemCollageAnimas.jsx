import CardByEcosystem from "./CardByEcosystem";

export default function EcosystemCollageAnimas({getAnimals}){

  return(
    <section className="max-w-[1200px] max-h-[1120px] flex flex-col gap-[2px] overflow-hidden rounded-xl">
    <header className="max-w-[1200px]  max-h-[744px] grid grid-cols-2 sm:grid-cols-3">
      <CardByEcosystem animal={getAnimals?.allAnimals?.left} />      
      <CardByEcosystem animal={getAnimals?.allAnimals?.center} />
        <div className="w-screen min-h-[182px] h-auto grid grid-cols-2 sm:grid-rows-2 sm:grid-cols-1 overflow-hidden"> 
          <CardByEcosystem isRight={true} animal={getAnimals?.allAnimals?.right?.top} />
          {getAnimals?.allAnimals?.right?.down && <CardByEcosystem isRight={true} animal={getAnimals?.allAnimals?.right?.down} />}
        </div>
    </header>
      <div className="w-full h-full">
        <CardByEcosystem animal={getAnimals?.allAnimals?.bottom} />
      </div>   
    </section>
  )
}