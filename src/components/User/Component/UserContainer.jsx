import Profile from '../Presentation/Profile'
import MyDonations from '../Presentation/MyDonations'
import MyPurchase from '../Presentation/MyPurchases'

const UserContainer = () => {
  return (
    <div className='mp-10 flex flex-col lg:flex-row lg:items-start lg:gap-10 items-center md:w-[95%] md:border-[1px] md:border-slate-100 lg:justify-center'>
      <Profile />
      <div>
        <MyPurchase />
        <MyDonations />
      </div>
    </div>
  )
}

export default UserContainer
