import React , {Component} from 'react';
import Home from './../Home/Home';
import Work from './../Work/Work';
import SocialMaide from './../SocialMaide/SocialMaide';
import Fooder from './../Fooder/Fooder';
import Profile from './../Profile/Profile';
import Protfalio from './../Protfalio/Protfalio';
import About from './../About/About';


class Page extends Component {
  render(){
    return(
      <div>
        <Home />
        <Work />
        <Protfalio />
        <Profile />
        <About />
        <SocialMaide />
        <Fooder />
      </div>
    )
  }
}


export default Page