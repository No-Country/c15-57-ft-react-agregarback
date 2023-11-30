import { Outlet, useOutlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Landing from '../../components/Landing'
import Hero from '../../components/Hero'

export default function Home() {
  const outlet = useOutlet()
  return (
    <>
      <Header />
      <hr />
      <Hero/>
      <main>{outlet ? <Outlet /> : <Landing />}</main>
      <hr />
      <Footer />
    </>
  )
}
