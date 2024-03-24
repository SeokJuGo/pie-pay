import {style, styleVariants} from '@vanilla-extract/css'
import theme from '@/styles/theme/theme';


export const paragraph = styleVariants({
    title:[{
        fontSize: '25px',
        fontWeight: 'bold',
        marginBottom: '10px',}],
    total:[{marginTop: '30px',color: theme.gray}]

})