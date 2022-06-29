import React from 'react'
import {AboutSectoin , Info ,Title , TitleSmall , Paragraph} from './Style'
const About = () => {
  return (
    <AboutSectoin>
      <div className="container">
        <Info>
          <Title>This is Me</Title>
           <TitleSmall>Web Developer</TitleSmall>
           <Paragraph>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
           <Paragraph> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Paragraph>
        </Info>
      </div>
    </AboutSectoin>
  )
}

export default About