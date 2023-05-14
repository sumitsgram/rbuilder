import React from 'react'
import PersonalDetails from '../DetailsFillingPage/PersonalDetails'
import Education from '../DetailsFillingPage/Education'
import Workxperience from '../DetailsFillingPage/WorkExperience'
import KeySkills from '../DetailsFillingPage/KeySkills'

function MyResume() {
  return (
    <div>
      <PersonalDetails/>
      <Education/>
      <Workxperience/>
      <KeySkills/>
    </div>
  )
}

export default MyResume


