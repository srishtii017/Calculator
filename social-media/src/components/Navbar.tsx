import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Analytics
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: isActive('/') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
          >
            Feed
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/top-users')}
            sx={{
              backgroundColor: isActive('/top-users')
                ? 'rgba(255, 255, 255, 0.1)'
                : 'transparent',
            }}
          >
            Top Users
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/trending')}
            sx={{
              backgroundColor: isActive('/trending')
                ? 'rgba(255, 255, 255, 0.1)'
                : 'transparent',
            }}
          >
            Trending
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 