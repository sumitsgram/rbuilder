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
      <TextField id="outlined-basic" label="" variant="outlined" />
      <TextField id="outlined-basic" label="" variant="outlined" />
      <TextField id="outlined-basic" label="" variant="outlined" />
      <TextField id="outlined-basic" label="" variant="outlined" />
      
    
    </Box>
  );
}

function KeySkills() {
  return (
    <div>
      <h3>Key Skills</h3>
      <MenuListComposition />
       <BasicTextFields/>
    </div>
  )
}

export default KeySkills


