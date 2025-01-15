import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"

import Loading from './utils/lodding/Loading';
import HomePage from './pages/homePage/HomePage';
import HostingPage from './pages/hostingPage/HostingPage';
import './utils/index.css'



export const App = () => {


  return (
    <>
      <div className="main-Container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hosting" element={<HostingPage />} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

