import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import NavBar from "./Navbar.js"
import 'regenerator-runtime/runtime'

const App = props => {

  return (
      <div>
        <BrowserRouter>
          <Route path="/" component={NavBar} />
        </BrowserRouter>
      </div>
  )
}

export default hot(App)