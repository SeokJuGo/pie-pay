import { style } from '@vanilla-extract/css'
import theme from '@/styles/theme/theme';

export const container = style({
    width: "100%",
})
export const contentContainer = style({

})
export const progress = style({
    // Mobile width
    width: '100%',

    // Default width
    '@media': {
        'screen and (min-width: 768px)': {
            width: '40%',
            left: '30%',
        },
    },
    position: 'sticky',
    zIndex: 1,
    backgroundColor: theme.layout,
    top: 0,


})

export const headerContainer = style({
    width: '100%',
    marginTop: '30px',
    position: 'sticky',
    backgroundColor: theme.layout,
    paddingLeft: '15px',
    paddingRight: '15px',


})

export const title = style({
    fontWeight: 'bold',
    fontSize: '25px'
})



export const image = style({
    borderRadius: '20px',
    margin: '7px'
})

export const hr = style({
    border: 0,
    height: '2px',
    background: theme.line,
    marginBottom: '20px',
})
export const listHeaderContainer = style({
    zIndex: 1,
    top: 32,
    position: 'sticky',
    backgroundColor: theme.layout,
    opacity: '80%'
})


export const submitButton = style({
    width: '90%',
    height: '10%',
    left: '5%',
    // Default width
    '@media': {
        'screen and (min-width: 768px)': {
            width: '30%',
            left: '35%'
        },
    },
    background: theme.blue,
    alignItems: 'center',
    borderRadius: '10px',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    bottom: '30px',
    color: 'white',
    fontWeight: 'bold'
})
