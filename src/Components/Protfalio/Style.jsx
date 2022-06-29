import styled from "styled-components";


export const ProtfalioSection = styled.div`
background:  #eee;
overflow: hidden;
padding-top: 20px;
`

export const Title = styled.h2`
text-align: center;
font-size: 30px;
color: #ea698b;
`

export const Span = styled.span`
text-align: center;
font-size: 30px;
color: #ea698b;
padding-bottom: 20px;
`

export const AllUl = styled.ul`
padding-bottom: 20px;
display: flex;
justify-content: center;
margin: 30px;
cursor: pointer;
`


export const AllLi = styled.li`
    margin-left: 20px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px 20px;
    background-color: #fff;
`

export const ImaheWrapper = styled.div`
    width: 25%;
    font-size: 0;
    position: relative;
    float: left;

     &:hover > div{
        opacity: 1;
    } 
`

export const Image = styled.img`
    width: 100%;
`

export const Overaly = styled.div`
    position: absolute;
    top: 0;right: 0;left: 0;bottom: 0;
    background: rgba(0,0,0,.8);
    font-size:15px;
    opacity: 0;
    margin: 0;
`

export const OveralySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    background: red;
    display: block;
    padding: 10px 20px ;
    cursor: pointer;
    border: 2px solid black;
    color: #fff;
    font-size: 17px;
    border-radius: 5px;
`