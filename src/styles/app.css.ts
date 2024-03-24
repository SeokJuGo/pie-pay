import { style } from '@vanilla-extract/css';
import theme from './theme/theme'


export const body = style({
    width: '100dvw',
    height: '100dvh'
})

export const container= style({
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
})
export const content = style({
    // Mobile width
    position: "relative",
    width: '100%',


    // Default width
    '@media': {
        'screen and (min-width: 768px)': {
            width: '40%'
        },
    },
    backgroundColor: theme.layout
});


