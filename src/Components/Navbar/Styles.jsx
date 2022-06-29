import styled from "styled-components";

export const NavberSection = styled.div`
 background-color: #ddd;
 padding: 10px;
 position: relative;
 border-bottom: 1px solid black;
 display: flex;
 justify-content: space-between;
 align-items: center;

`

export const Logo = styled.div`
width: 50%;
float: left;
@media (max-width:768px){
  width: 80%;
}
`

export const LogoH2 = styled.h2`

    font-size: 30px;
    color: #E85D75;
    
`



export const AllUL = styled.ul`
width: 50%;
float: left;
@media (max-width:768px) {
  position: absolute;
  top: 105%; display: block;
  background-color: #fff;
}

`

export const AllLI = styled.li`
display: inline-block;
margin-left: 10px;
text-align: center;
@media (max-width:768px){
   position: relative;
   display: block;
    left: -14px;
    right: 99px;
    z-index: 1000;
    min-height: 6vh;
    width: 150%;
}


`

export const Anchor = styled.a`
  display: block;
  align-items: center;
  margin-top: 10px;
  border: 1px solid black;
  padding: 5px 9px;
  color: brown;
  background-color: #fff;
  font-size: 17px;
  border-radius: 5px;

  &:hover{
    background-color: #E85D75;
    color: #fff;
  }
`

export const Menu = styled.div`
 border-radius:5px ;
 padding: 5px 10px  ;
 border: 1px solid black;
 background-color:#fff;
 cursor: pointer;

 display: none;
 @media (max-width:768px) {
  display: inline-block;
 }
`



