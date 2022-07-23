import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from '../Images/logo-grupoB-black.png'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div className='navItems'>
        <img src={logo} className="ourLogo" alt="groupB-logo"></img>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" aria-label="nav tabs example" className='navText'>
          <LinkTab label="Home" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
        </Tabs>
      </div>
    </Box>
  );
}
