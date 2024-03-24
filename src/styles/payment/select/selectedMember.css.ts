import {style} from '@vanilla-extract/css'
import theme from '@/styles/theme/theme';

export const animationPing = style({
    position: 'relative',
    left: '50%',
    bottom: '80%'
})
export const member = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',

})

export const selectedContainer = style({
    display: 'flex',
    marginTop: '15px',
    marginBottom: '10px',
})

export const image = style({
    borderRadius: '15px',
    margin: '2px'
})


export const memberName = style({
    fontSize: '10px',
    fontWeight: 'bold'
})