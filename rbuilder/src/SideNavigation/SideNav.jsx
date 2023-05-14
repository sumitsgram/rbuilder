import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 200,
  bgcolor: 'background.paper',
  top: 10, left: 10,
};

export default function ListDividers() {
  return (
    <List sx={style} component="" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Personal Details"/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Education" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Work Experience" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Key Skills" />
      </ListItem>
    </List>
  );
}

