import { globalStyle, style, styleVariants} from '@vanilla-extract/css';
import theme from '@/styles/theme/theme';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '70%',
    marginLeft: "5%",
})

export const paragraph = style({
    fontWeight: 'bold',
    fontSize: "25px"
})

export const ul = styleVariants({
    store: [{marginBottom: '10px'}],
    menu: [{display: 'flex', justifyContent: 'space-around',}]
})
globalStyle(`${ul.menu} > li`, {
    width: '25%',
});
export const list= styleVariants({
    result:[{width: '75%'}]
})
