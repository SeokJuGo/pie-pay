import {createVar, style, styleVariants} from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';


export const pargraph = styleVariants({
    title:[{marginBottom: "10px",
        fontSize: '25px',
        fontWeight: 'bold'}],
    paymentMember:[{fontSize: '14px',color: theme.gray, marginBottom: '10px'}]

})

export const box = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 5px 5px rgba(0,0,0,0.1)',

})
const bold = style({
    fontWeight: 'bold'
})

export const boxParagraph =styleVariants({
   title:[bold,{fontSize: '15px',marginBottom:'10px'}],
   balance:[bold,{fontSize: '20px'}]
});
export const receiptBox = style({
    display: 'flex',
    justifyContent: 'end',
})
export const receiptButton = style({
    backgroundColor: theme.skyblue,
    fontWeight: 'bold',
    padding: '8px',
    borderRadius: '15px',
    fontSize: '10px',
    width: '20%',
})

export const submitButton = style({
    // Mobile width
    width: '93%',
    // Default width
    '@media': {
        'screen and (min-width: 768px)': {
            width: '35%'
        },
    },
    height: '10%',
    position: 'fixed',
    bottom: '40px',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: theme.blue,
    borderRadius: '10px'
})