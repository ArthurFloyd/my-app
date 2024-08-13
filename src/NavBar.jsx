import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { grey } from '@mui/material/colors';
import shadows from '@mui/material/styles/shadows';
import { light } from '@mui/material/styles/createPalette';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 32,
  width: 912,
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: shadows,
  // vertical padding + font size from searchIcon
  // paddingLeft: 20,
  // transition: theme.transitions.create('width'),
  backgroundColor: light,
  width: '100%',
  // width: 912,
  height: 42,
  // top: 19,
  marginLeft: 32,
  // gap: 0,
  // borderRadius: 4,
  // opacity: 0,
}
));

const NavBar = () => {

  const [value, setValue] = React.useState('');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <StyledInputBase
              placeholder="Введите поисковый запрос"
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Search>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => console.log(value)}>ИСКАТЬ</Button>
          </Stack>


        </Toolbar>
      </AppBar>

    </Box >
  );
}

export default NavBar