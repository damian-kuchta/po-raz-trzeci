import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import logo from '../../assets/app-logo.png'
import { Link } from 'react-router-dom';
import './styles.scss'

const navItems = [{ text: 'Jak to działa?', path: 'about' }, { text: 'Dostawa i płatność', path: 'ship' }]


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fff', textTransform: 'uppercase' }}>
      <Box>
        <img className='logo' alt='logo' src={logo}></img>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <Link key={idx} to={item.path}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar sx={{ backgroundColor: '#0d2a10' }} component="nav">
          <Container maxWidth='lg'>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
              >
                <Link to='/'>
                  <img className='logo' alt='logo' src={logo}></img>
                </Link>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item, idx) => (
                  <Link key={idx} to={item.path}>
                    <Button sx={{ color: '#fff' }}>
                      {item.text}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexGrow: '1', justifyContent: 'flex-end' }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Button variant="contained" color='success' sx={{ marginLeft: '10px' }}>Zaloguj</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}

            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80vw', backgroundColor: '#282c34' },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <AppBar position="fixed" sx={{ backgroundColor: '#0d2a10', top: 'auto', bottom: 0, display: { xs: 'block', md: 'none' } }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <ReceiptIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

