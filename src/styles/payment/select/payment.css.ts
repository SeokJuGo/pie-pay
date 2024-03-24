import { style } from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';

export const container = style({
    // Mobile width
    width: '100%',

    // Default width

    '::-webkit-scrollbar': {
        width: '3px'
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#D3D3D3'
    },
    overflowY: 'auto',
    height: '100%',
    position: 'absolute',
    backgroundColor: theme.layout,
    padding: '20px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex:10,


})