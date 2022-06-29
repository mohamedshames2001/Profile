import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import React , {Component} from 'react';
import Navbar from './Components/Navbar/Navber';
import Page from './Components/Pages/Page'
import Contact from './Components/Contact/Contact'




class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    )
  }
}


export default App