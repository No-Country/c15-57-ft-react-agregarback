export default function BotonBanner ({path,  link, children }) {
  
  return (
    <a href={path + link} 
    className="w-[210px] h-10 hover:cursor-pointer hover:bg-yellow-50 bg-teal-300 px-4 rounded-2xl text-base text-gray-800 flex justify-center items-center "> 
      <p className="font-semibold ">{children}</p>
    </a>
  )
};