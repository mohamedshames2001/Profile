import React from 'react'
import {SectoinHome , Container , Logo ,Heading , Prgrapg , LogoP , ButtonBtn , MyButton} from './Style'
const Home = () => {
  return (

    <SectoinHome>
      <div className="container">
       <Container>
      <Logo>
            <Heading>mohamed shames</Heading>
        </Logo> 
        <LogoP>
          <Prgrapg>I'm Mohamed Shames, I'm Full Stack, This is Frist Project main </Prgrapg>
        </LogoP>
        <ButtonBtn>
          <MyButton>Get Info</MyButton>
          </ButtonBtn>
        </Container>
      </div>
    </SectoinHome>
  )
}

export default Home