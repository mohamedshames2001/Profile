import React , {Component} from 'react'
import { VscCode} from "react-icons/vsc";
import {WorkSection , Title , Span , WorkChild , Icon , TitleSmall , Paragraph} from './Style';
import axios from 'axios';
class Work extends Component {

    state = {
      works : []
    }
 
    componentDidMount(){
      axios.get('JSON/Data.json').then(res => this.setState({works : res.data.works}));
    }



   render(){

    const {works} = this.state;
    const worksList = works.map((workItem) => { 
      
      return(

        <WorkChild frist={workItem.id} key={workItem.id} >
        <Icon className={workItem.icon_name} />
        <TitleSmall>{workItem.title}</TitleSmall>
        <hr className="Star" />
        <Paragraph>{workItem.body}</Paragraph>
       </WorkChild>
 
      )

     })

    return ( 
      <WorkSection>
       <div className="container">
       {worksList}
       </div>
      </WorkSection>
      
    )
   }
}

export default Work