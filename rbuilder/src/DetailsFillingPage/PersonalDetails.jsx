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
      <TextField id="outlined-basic" label="FirstName" variant="outlined" />
      <TextField id="outlined-basic" label="LastName" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="City" variant="outlined" />
      <TextField id="outlined-basic" label="State" variant="outlined" />
      <TextField id="outlined-basic" label="PinCode" variant="outlined" />
      <TextField id="outlined-basic" label="Objectives" variant="outlined" />
    
    </Box>
  );
}

function PersonalDetails() {
    return (
    <div>
        <MenuListComposition />
        <div>
        <BasicTextFields/>
        </div>
    </div>
    )
  }
  
  export default PersonalDetails




