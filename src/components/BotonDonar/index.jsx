import './style.css'
const BotonDonar = ({link,children}) =>{

  return (
<a href={link} className="BotonDonar"> <p className="BotonDonar-children">{children}</p>

</a>
)}

export default BotonDonar