import {createVar, globalStyle, style} from '@vanilla-extract/css';




export const container = style({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
})

export const content = style({
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

})

export const box = style({
    height: '60%',
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: '10px',
    transition: 'all 0.3s ease-out',
    textDecoration: 'none',
    ':hover': {
        transform: 'translateY(-5px) scale(1.005) translateZ(0)',
        boxShadow: `0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(206, 178, 252, 0.48)`,
    },


})



export const image = style({
    width: '60%',
    transform: 'translateX(-200%)',
    ':hover':{
        transform: 'translateY(-40px)'
    },
    transitionDuration:'300ms'
})
    globalStyle(`${box} > p`, {
        fontWeight: 'bold'
});

