import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './Containers/Login';
import HomeComponent from './Containers/Home';
import AboutComponent from './Containers/About';
import NavbarComponent from './Containers/Navbar';
import FooterComponent from './Containers/Footer';


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginComponent} />
        <NavbarComponent>
        <FooterComponent>
          <Route path='/home' exact component={HomeComponent} />
          <Route path='/about' exact component={AboutComponent} />
        </FooterComponent>
        </NavbarComponent>
      </Switch>
    </Router>
  )
}

export default App;