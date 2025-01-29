import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"

import Loading from './utils/lodding/Loading';
import HomePage from './pages/homePage/HomePage';
import HostingPage from './pages/hostingPage/HostingPage';
import './utils/index.css'
import PlayerListCreate from './pages/playerList/PlayerListCreate';
import Register from './pages/userCredentials/Register';
import Login from './pages/userCredentials/Login';



export const App = () => {


  return (
    <>
      <div className="main-Container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/h" element={<HomePage />} />
            <Route path="/:id" element={<HostingPage />} />
            <Route path="/p" element={<PlayerListCreate/>} />
            <Route path="/r" element={<Register/>} />
            <Route path="/l" element={<Login/>} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

