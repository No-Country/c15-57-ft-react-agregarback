import { Outlet, useOutlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Landing from '../components/Landing'

export default function Home() {
  const outlet = useOutlet()
  return (
    <>
      <Header />
      <hr />
      <main>{outlet ? <Outlet /> : <Landing />}</main>
      <hr />
      <Footer />
    </>
  )
}
