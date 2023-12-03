import '../Presentation/style.css'
export default function BotonDonar({ link, children }) {
  return (
    <a href={link} className="BotonDonar">
      <p className="BotonDonar-children">{children}</p>
    </a>
  )
}
