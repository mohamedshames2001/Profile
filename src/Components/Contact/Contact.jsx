import React from 'react'
import {ContactSection ,Title , Span , Form ,Input , FormInput  , InputText , InputEmail , InputExp ,TextArea , InputSubmit} from './Style'
import Fooder from '../Fooder/Fooder'
const Contact = () => {
  return (
     <React.Fragment>
          <ContactSection>
    <div className="container">
        <Title><Span>Drop </Span>Me A line</Title>
        <Form action="">
            <FormInput>
                <InputText type="text" placeholder="Your Name" />
                <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
        </Form>
    </div>
</ContactSection>
    <Fooder/>
     </React.Fragment>
  )
}

export default Contact