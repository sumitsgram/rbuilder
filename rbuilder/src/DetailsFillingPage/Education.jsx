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
      <TextField id="outlined-basic" label="Type" variant="outlined" />
      <TextField id="outlined-basic" label="University" variant="outlined" />
      <TextField id="outlined-basic" label="Degree" variant="outlined" />
      <TextField id="outlined-basic" label="Start Year" variant="outlined" />
      <TextField id="outlined-basic" label="End Year" variant="outlined" />
      
    
    </Box>
  );
}

function Education() {
  return (
    <div>
      <h3>Education Details</h3>
      <MenuListComposition />
       <BasicTextFields/>
    </div>
  )
}

export default Education

