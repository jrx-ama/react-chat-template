import { Avatar } from '@chatscope/chat-ui-kit-react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#eee', color: '#0B4C46' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#0B4C46' }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: '1 0 0',
            }}
          >
            <img
              alt="dkv-logo"
              src="https://develop.jaraxa.systems/dkv/img/logo.png"
              loading="lazy"
              style={{ width: '200px' }}
            />
            <Button color="inherit">
              <Avatar
                style={{
                  background: '#0b4c46',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  marginRight: '5px',
                }}
              >
                DKV
              </Avatar>
              Evisita1
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
