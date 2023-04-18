import {useState, useContext} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthProvider';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const {signOut, currentUser} = useContext (AuthContext);
  const [navMenuAnchorEl, setNavMenuAnchorEl] = useState (null);
  const location = useLocation();
  const handleMenuClick = e => {
    setNavMenuAnchorEl (e.currentTarget);
  };
  const handleMenuClose = () => {
    setNavMenuAnchorEl (null);
  };
  const selected = {
    backgroundColor: 'rgba(0,0,0,.1)'
  }
  console.log(location.pathname)
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{textDecoration: 'none', color: 'white'}}
        >
          My App
        </Typography>
        <IconButton edge="end" onClick={handleMenuClick} sx={{ml: 'auto'}}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={navMenuAnchorEl}
          open={!!navMenuAnchorEl}
          MenuListProps={{
            onMouseLeave: handleMenuClose,
          }}
        >
          <MenuItem component={Link} to={'/about'} className={location.pathname === '/about' ? selected : ''}>About</MenuItem>
          <MenuItem component={Link} to={'/dashboard'} className={location.pathname === '/dashboard' ? selected : ''}>Dashboard</MenuItem>
          {currentUser
            ? <MenuItem onClick={signOut}>Sign out</MenuItem>
            : <MenuItem component={Link} to={'/login'} className={location.pathname === '/login' ? selected : ''}>Log In</MenuItem>}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
