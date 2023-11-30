import jungla from "../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg"
import logo from "../../assets/Frame 4048.png"
import googleLogo from "../../assets/icons8-google.png"
import facebookLogo from "../../assets/icons8-facebook.png"

export default function Register ()  {
 return <div className="flex">
  {/* form section */}
  <section className="w-1/2 flex flex-col items-center justify-center p-2.5 gap-2.5 h-auto mt-8">
  <div className="flex flex-col justify-center  shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <img src={logo} alt="" className="w-80 h-7 mt-6 "/>
    <h2 className="font-display text-3xl font-light leading-10 mt-6 text-center">Bienvenido</h2>
    
    <div className="w-full max-w-xs">
     {/* beginning of the form */}
    <form className=" rounded px-8 pt-6 pb-7 mb-4">
     {/* username input */}
     <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Usuario
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Usuario" required/>
       <p className="text-gray-600 text-xs italic">20 caracteres máx, se permite caracteres especiales</p>
     </div>
     {/* email input */}
     <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Correo electrónico
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="juanito@gmail.com" required/>
     </div>
     {/* password input */}
     <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required/>
      <p className="text-gray-600 text-xs italic">Máx 8 caracteres, debe contener al menos una mayúscula, debe contener al menos un número</p>
     
     </div>
     {/* submit button input */}
     <div className="flex items-center justify-center">
      <input type="submit" className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" value="Registrarme"/>
    </div>
  </form>
  </div>
  {/* horizontal role */}
  <div className="flex justify-center items-center">
    <hr className="w-2/5" />
    <span className="w-1/5 text-center"> o</span>
    <hr className="w-2/5"/>
  </div>
  {/* other options to regiter */}
    <div className="flex flex-col gap-2 ">
     <button className="flex justify-center rounded bg-neutral-100 item-center border "> <img src={googleLogo} alt="gogle-logo" className="py-1.5 object-fill h-full" /> <span className="py-1.5 text-center w-9/12">Iniciar con Google</span></button>
     <button className="flex justify-center rounded bg-neutral-100 item-center border "> <img src={facebookLogo} alt="gogle-logo" className="py-1.5 object-fill h-full" /> <span className="py-1.5 text-center w-9/12"> Iniciar con Facebook</span></button>
     <p className="text-center font-bold">iniciar sesión</p>
    </div>
  </div>
  </section>
  {/* main image section */}
  <section className="w-1/2 ">
   <img src={jungla} alt="jungla" className="object-fill w-screen h-full"/>
  </section>
 </div>
}