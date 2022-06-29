import React from 'react'
import {SocialMedia , Social , Icon , Span , SpanInfo, Paragraph} from './Style'
import axios from 'axios'


class SocialMaide extends React.Component {
   
   state = {
    social : []
   }

   componentDidMount(){
    axios.get('JSON/Data.json').then(res => this.setState({social : res.data.social}));
  }

   render(){
      
    const {social} = this.state;

    const SocialMediaList = social.map((item) => {
       return(
       <Social key={item.id} item={item.id}>
        <Icon className={item.icon}></Icon>
        <Paragraph>
            <Span>{item.title}</Span>
            <SpanInfo>{item.body}</SpanInfo>
        </Paragraph>
    </Social>
       )
    })
     

    return (
       
      <SocialMedia>
              
      {SocialMediaList}
  
  </SocialMedia>
    )
   }

}

export default SocialMaide