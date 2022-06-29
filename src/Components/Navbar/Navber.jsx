import React , { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { NavberSection, Logo, AllUL, AllLI, LogoH2, Anchor, Menu } from './Styles'
import { AiOutlineMenu } from "react-icons/ai";


const Navber = () => {


  const [toggleMenu , setToggleMenu] = useState(false);
 const [screenWidth, setscreenWidth] = useState(window.innerWidth)
  const NavberMenue = () => {
    setToggleMenu(!toggleMenu)
  }

   useEffect(() => { 
    const changeWidth = () => {
      setscreenWidth(window.innerWidth)
    }
    window.addEventListener('resize' , changeWidth)

    return () =>{
      window.removeEventListener('resize' , changeWidth)
    }

    }, [])

  return (
    <NavberSection>
      <div className="container">

        <Logo>
          <LogoH2>MY NETWORK</LogoH2>
        </Logo>



        <AllUL>
        {(toggleMenu || screenWidth > 768) && (
          <>      
          <AllLI><Link className='Anchor' to='/'>Home</Link></AllLI>
          <AllLI><Anchor href='#'>about</Anchor></AllLI>
          <AllLI><Anchor href='#'>Work</Anchor></AllLI>
          <AllLI><Anchor href='#'>Profile</Anchor></AllLI>
          <AllLI><Anchor href='#'>Protfalio</Anchor></AllLI>
          <AllLI><Anchor href='#'>Social Maide</Anchor></AllLI>
          <AllLI><Link className='Anchor' to="/contact">Contact</Link></AllLI>
          </>

        )}

        </AllUL>


      </div>
      <Menu>
        <AiOutlineMenu onClick={NavberMenue} />
      </Menu>

    </NavberSection>
  )
}

export default Navber