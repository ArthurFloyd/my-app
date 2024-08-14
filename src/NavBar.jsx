import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import { FormControl, OutlinedInput } from '@mui/material';


const NavBar = () => {

  const [value, setValue] = React.useState('');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: 1440, height: 80, background: '#739ab9' }}>
        <Toolbar>
          <form noValidate autoComplete="off">
            <FormControl >
              <OutlinedInput placeholder="Введите поисковый запрос" sx={{ placeContent: 'italic', width: 912, height: 42, top: 10, background: '#fff' }} value={value} onChange={(e) => setValue(e.target.value)} />
            </FormControl>
          </form>
          <Button variant="contained" onClick={() => console.log(value)} sx={{ top: 9, left: 6, padding: "8px 22px 8px 22px", gap: 0, background: '#113047' }}>ИСКАТЬ</Button>

        </Toolbar>
      </AppBar>

    </Box >
  );
}

export default NavBar