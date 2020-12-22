import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../home/Home'
import Movie from '../movieDetails/movie'
import App from '../player/shakaPlayer';
import Navbar from '../NavBar/navBar'
import Footer from '../footer/footer'

import './menu.css'

const menu = () => {
    return (
        <Router>
           <Navbar/>
            <Switch>

              <Route exact path='/' render={ () =>
                <div>
                  <Home />
                  <Footer />
                </div>
              }/>

              <Route exact path='/movie' render={ () =>
                <div>
                  <Movie />
                  <Footer />
                </div>
              }/>

              <Route exact path='/player' component={App}/>  

          </Switch>
        </Router>
    )
}

export default menu;