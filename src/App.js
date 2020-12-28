import React from "react"
import LandingPage from "./components/route/menu"
import {init} from "./manager/analyticsManager"
import "./App.css"

const App = () => {
    init()
  return <LandingPage />
}

export default App
