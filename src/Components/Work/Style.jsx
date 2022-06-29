import styled from "styled-components";


export const WorkSection = styled.div`
overflow: hidden;

grid-template-columns: repeat(auto-fit, minmax(300px ,1fr ));
    display: grid;
    gap: 2rem;


`

export const Title = styled.h1`
    font-size: 50px;
    color: #04724d;

`

export const Span = styled.span`
    font-size: 50px;
    color: #5687fe;

`

export const WorkChild = styled.div`
    margin-top:20px;
    width: 30%;
    float: left;
    height: auto;
    padding:100px 0;
    border: 1px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${props => props.frist === 1 ? "0" : "5%"};
    position: relative;

    @media (max-width:768px) {

  }

`

export const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40% , -170%);
  font-size: 50px;
  color: #ccc;
`

export const TitleSmall = styled.h4`
    font-size: 20px;
    padding: 20px;
`


export const Paragraph = styled.p`
    color: #ccc;
  position: absolute;
  bottom: 10%;
`