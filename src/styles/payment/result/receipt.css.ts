import {createVar, style, styleVariants} from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';

export const header = style({
    display: 'flex',
    justifyContent: 'space-between'
})
export const baseContainer = style({
    width: '100%',
    height: '100%',
    position: 'fixed',
    justifyContent: 'center',

    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,

})
export const container = styleVariants({

    invisible: [baseContainer, {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }],
    visible: [baseContainer, {
        pointerEvents: 'none',
        overflow: 'hidden',

    }]
})
const baseModal = style({
    width: '100%',
    height: '70%',
    position: 'absolute',
    bottom:0,
    borderRadius: '10px',
    background: 'white',
    transitionDuration: "500ms",
    transition: "transform 0.4s ease-out",
    backgroundColor: theme.layout,
    padding: "4%"
})
export const modal = styleVariants({
    visible:[baseModal,{display: 'inline', transform: 'translateY(0%)'}],
    invisible:[baseModal,{ transform: 'translateY(100%)', overflow: 'hidden',}]
})

