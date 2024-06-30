import { Route, Router, Routes, useRoutes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import MainLayout from './layouts/MainLayout'

function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
  ])

  // return (
  //   <>
  //     {/* <Routes>
  //       <Route path='/' element={<Home />}></Route>
  //       <Route path='/signIn' element={<Login />}></Route>
  //     </Routes> */}
  //   </>
  // )
  return router
}

export default App
