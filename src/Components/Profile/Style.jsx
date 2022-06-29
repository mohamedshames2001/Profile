import styled from "styled-components";


export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSkillsProfile = styled.div`
    width: 50%;
    float: left;
`

export const TitleH = styled.h2`

 
 margin-bottom: 20px;

`

export const Profileitem = styled.li`
margin-bottom: 8px;
`

export const Span = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
`

export const  SpanWeb = styled.span` 
    font-weight: normal;
    color: #eb5424;
`

export const ProfileSkillsMy = styled.div`
    width: 50%;
    float: left;
   
    
` 


export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`

export const Box = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
    width: ${props => props.item === 1 ? '95%' : ''};
    width: ${props => props.item === 2 ? '85%' : ''};
    width: ${props => props.item === 3 ? '70%' : ''};
    width: ${props => props.item === 4 ? '60%' : ''};
    width: ${props => props.item === 5 ? '89%' : ''};
`


export const Title = styled.span` 
    float: left;
`

export const Perc = styled.span`
    float: right;
    margin-right: 100px;
`

export const Parent  = styled.div`
    height: 2px;
    clear: both;
    background: red;
    position: relative;
    top: 5px;
`

export const SpanDiv = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
`


