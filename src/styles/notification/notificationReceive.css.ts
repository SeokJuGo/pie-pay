import {globalStyle, style, styleVariants} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";


export const container = style({
    width: '95%',
    height: '9%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1.5rem',
    top: 0,
    cursor:'pointer',

    zIndex: '99',
    margin: '10px',
    backgroundColor: 'white',
    borderRadius: '20px'
})

export const visible = style({
    transform: 'translateY(-150%)',
    transitionDuration: '300ms'
})


export const content = style({
    display: 'flex',
    justifyContent: 'space-between'
})
export const title = style({
    display:'flex',
    marginBottom: '0.8rem'
})
export const paragraph = style({
    color:theme.gray,fontSize: '0.8rem'
})


globalStyle(`${title} > p`, {
    display:'flex',fontWeight:'bold', marginLeft:'0.5rem'
});
