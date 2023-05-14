import MenuListComposition from '../SideNavigation/SideNav'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Job Title" variant="outlined" />
      <TextField id="outlined-basic" label="Organisation Name" variant="outlined" />
      <TextField id="outlined-basic" label="Start Year" variant="outlined" />
      <TextField id="outlined-basic" label="End Year" variant="outlined" />
    </Box>
  );
}

function WorkExperience() {
  return (
    <div>
      <h3>Work Experience</h3>
      <MenuListComposition />
       <BasicTextFields/>
    </div>
  )
}

export default WorkExperience


