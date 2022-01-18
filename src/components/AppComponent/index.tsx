import React from 'react';
import { useStyles } from './styles';
import logo from '../../assets/svgs/logo.svg';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="App">
        <header className="App-header">
          <Box
            sx={{
              animation: `${AppLogoSpin} infinite 20s linear`,
            }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </Box>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};

export default Home;
