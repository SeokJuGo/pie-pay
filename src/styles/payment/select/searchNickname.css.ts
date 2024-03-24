import {style} from '@vanilla-extract/css'
import theme from '@/styles/theme/theme';


export const search = style({
    display: 'flex',
    marginLeft: '10px'
})
export const input = style({
    marginLeft: '20px',
    fontSize: '12px',
    backgroundColor: theme.layout,
})
