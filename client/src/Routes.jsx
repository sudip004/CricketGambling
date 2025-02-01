import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"

import Loading from './utils/lodding/Loading';

import HostingPage from './pages/hostingPage/HostingPage';
import './utils/index.css'
import PlayerListCreate from './pages/playerList/PlayerListCreate';
import Register from './pages/userCredentials/Register';
import Login from './pages/userCredentials/Login';
import LiveMatchData from './pages/liveMatches/LiveMatchData';
import GamblingPage from './pages/Gambling/GamblingPage';
import BalancePage from './pages/Balance/BalancePage';



export const App = () => {


  return (
    <>
      <div className="main-Container">
        <Suspense fallback={<Loading />}>
          <Routes>
            
            <Route path="/:id" element={<HostingPage />} />
            <Route path="/p" element={<PlayerListCreate/>} />
            <Route path="/r" element={<Register/>} />
            <Route path="/l" element={<Login/>} />
            <Route path="/" element={<LiveMatchData/>} />
            <Route path="/home-matchdelails/:id" element={<GamblingPage/>} />
            <Route path="/b" element={<BalancePage/>} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

