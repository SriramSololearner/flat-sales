import { createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const theme = createTheme({
    components: {
        MuiSelect: {
            defaultProps: {
                IconComponent: ExpandMoreIcon,

            },
            styleOverrides: {
                root: {
                    '.MuiSvgIcon-root': {
                    }
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

});


export { theme };