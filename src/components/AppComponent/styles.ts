import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    '& .App': {
      'textAlign': 'center',

      '& .App-header': {
        'backgroundColor': '#282c34',
        'minHeight': '100vh',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'fontSize': 'calc(10px + 2vmin)',
        'color': 'white',

        '& .App-logo': {
          height: '40vmin',
          pointerEvents: 'none',
        },

        '& .App-link': {
          color: '#61dafb',
        },
      },
    },
  },
}));
