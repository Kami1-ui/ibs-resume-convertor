import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Shadows } from '@material-ui/core/styles/shadows';

export const themeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f50057',
        },
    },
    shadows: Array(25).fill("none") as Shadows,
};