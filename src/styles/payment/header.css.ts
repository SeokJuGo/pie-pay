import { style } from '@vanilla-extract/css'
import theme from '@/styles/theme/theme';


export const header = style({
    // Mobile width
    width: '100%',

    // Default width
    '@media': {
        'screen and (min-width: 768px)': {
            width: '40%',
            left: '30%',
        },
    },
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex:1,
    top: 0,
    padding: '10px',
    marginBottom: '10px',
    paddingRight: '60px',
    backgroundColor: theme.layout
})
