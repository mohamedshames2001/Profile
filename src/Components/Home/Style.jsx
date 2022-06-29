import styled from "styled-components";

export const SectoinHome = styled.div`
   height: 550px;
   text-align: center;
   position: relative;
   background-image: url("https://c1.wallpaperflare.com/preview/643/683/623/workplace-office-desk-business.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
`

export const Container = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50% , -50%);
`

export const Logo = styled.div`
  padding: 20px;
`

export const Heading = styled.h2`
  color: #000814;
  font-size: 50px;

  @media (max-width:768px) {
    font-size: 30px;
  }

`

export const LogoP = styled.div`
  padding: 20px;

`


export const Prgrapg = styled.p`
 margin-bottom: 15px;
 font-size:20px;
 color: #5762d5;
 width: 70%;
 margin-left: auto;
 margin-right: auto;
 font-weight: 1000;

 @media (max-width:768px) {
    font-size: 20px;
    width: 300px;
  }
`

export const ButtonBtn = styled.div`
margin-bottom: 10px;
`

export const MyButton = styled.button`
 background: #E85D75;
 width: 150px;
 height: 50px;
 color: #fff;
 font-size: 20px;
 border: none;
 border-radius: 5px;
 cursor: pointer;

 &:hover{   
    color: #E85D75;
    background: #fff;
    border:1px solid #E85D75;
 }

 @media (max-width:768px) {
  width: 100px;
 height: 30px;
  }
`