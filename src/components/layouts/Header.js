import {styled} from '@mui/system';
import Link from "next/link";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@material-ui/core/styles"; // styles 기능 추가


const Header = () => {

  return (
    <Box sx={{
      flexGrow: 1,
    }}>
      <Test>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
            }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            CORONA DATA BOARD
          </Typography>

          <Link href={'/sign-up'}>
            <Button color="inherit">Sign up</Button>
          </Link>
          <Button color="inherit">Sign in</Button>
        </Toolbar>
      </Test>
    </Box>
  );
};

const Test = styled(AppBar)({
  color: 'darkslategray',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: 8,
  borderRadius: 4,
  backdropFilter: 'saturate(180%) blur(15px)',
  position: 'relative'
});

export default Header;