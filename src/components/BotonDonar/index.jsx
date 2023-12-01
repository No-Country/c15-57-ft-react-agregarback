
const BotonDonar = ({link,children}) =>{

  return (
<a href={link} 
  className="w-209 h-10 hover:cursor-pointer hover:bg-yellow-50 bg-teal-300 px-4 rounded-2xl text-base text-gray-800 flex justify-center items-center absolute bottom-[-30px]"> 
  <p className="font-semibold ">{children}</p>
</a>
)}

export default BotonDonar