import { Outlet } from 'react-router-dom'
import HeaderHL from '../common/HeaderHL/HeaderHL'
import Menu from '../components/SideBar/SideBar'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Menu className='sidebar' />
      <div className='content'>
        <HeaderHL />
        <Outlet />
      </div>
    </div>
  )
}
export default MainLayout
