/*import jungle from '../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg'
import logo from '../assets/Frame 4048.png'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import OtherSesion from '../../../components/OtherSesion'
*/
export default function Register() {
  return (
    <div className="flex">
      {/* form section */}
  /*
  
   
       <section className="w-1/2 flex flex-col items-center justify-center p-2.5 gap-2.5 h-auto mt-8">
        <div className="flex flex-col justify-center  shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <img src={logo} alt="" className="w-80 h-7 mt-6 " />
          <h2 className="font-display text-3xl font-light leading-10 mt-6 text-center">
            Bienvenido
          </h2>

          <div className="w-full max-w-xs">
            {/* beginning of the form */}
            <form className=" rounded px-8 pt-6 pb-7 mb-4">
              {/* username input */}
              <Input
                name="usuario"
                text="20 caracteres maximo y se permiten caracteres especiales"
                type="text"
                placeholder="Usuario"
                id="username"
                />
              {/* email input */}
              <Input
                name="correo electrónico"
                text=""
                type="email"
                placeholder="juanito@gmail.com"
                id="email"
                />
              {/* password input */}
              <Input
                name="contraseña"
                text="Máx 8 caracteres, debe contener al menos una mayúscula, debe
                contener al menos un número"
                type="password"
                placeholder="******************"
                id="password"
                />
              {/* submit button input */}
              <Button
                text="Registrarme"
                color="bg-green-600"
                colorHover="hover:bg-green-900"
                />
            </form>
          </div>
          {/* horizontal rule */}
          <div className="flex justify-center items-center">
            <hr className="w-2/5" />
            <span className="w-1/5 text-center"> o</span>
            <hr className="w-2/5" />
          </div>
          {/* other options to register */}
          <OtherSesion />
        </div>
      </section>
      {/* main image section */}
      <section className="w-1/2 ">
        <img
          src={jungle}
          alt="jungla"
          className="object-fill w-screen h-full"
          />
      </section>
      */
    </div>
  )
}
