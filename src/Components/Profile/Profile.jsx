import React, { useState, useEffect } from 'react'
import { ProfileSkills, ProfileSkillsProfile, Profileitem, Span, TitleH, ProfileSkillsMy, SkillsDesc, Box, Title, Perc, Parent, SpanDiv, SpanWeb } from './Style'
import axios from 'axios';
const Profile = () => {

  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios.get('JSON/Data.json').then(res => { setProfile(res.data.profile) });
  })

  const ProfileMap = profile.map((itemProfile) => {
    return (
      <Box key={itemProfile.id} item={itemProfile.id}>
        <Title>{itemProfile.title}</Title>
        <Perc>{itemProfile.Perc}</Perc>
        <Parent>
          <SpanDiv></SpanDiv>
        </Parent>
      </Box>
    )
  })

  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSkillsProfile>
          <TitleH><span>My </span>Profile</TitleH>
          <ul>
            <Profileitem>
              <Span>Name</Span>
              Mohamed Shames
            </Profileitem>
            <Profileitem>
              <Span>Birthday</Span>
              14/11/2001
            </Profileitem>
            <Profileitem>
              <Span>Address</Span>
              Nasr City
            </Profileitem>
            <Profileitem>
              <Span>Phone</Span>
              +201061242066
            </Profileitem>
            <Profileitem>
              <Span>Email</Span>
              Mohamedhames@gmail.com
            </Profileitem>
            <Profileitem>
              <Span>Website</Span>
              <SpanWeb>www.google.com</SpanWeb>
            </Profileitem>
          </ul>
        </ProfileSkillsProfile>

        <ProfileSkillsMy>
          <TitleH>Some <span>skills</span></TitleH>

          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {ProfileMap}
        </ProfileSkillsMy>

      </div>
    </ProfileSkills>
  )
}

export default Profile