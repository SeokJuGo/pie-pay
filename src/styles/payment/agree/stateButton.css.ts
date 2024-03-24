import {style, styleVariants} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";

export const container = style({
    display: 'flex',
    justifyContent: 'center'
})
export const tip = style({
    fontSize: '15px',
    color: theme.gray
})
export const content = style({
    width: '92%',
    // Default width
    '@media': {
        'screen and (min-width: 768px)': {
            width: '35%'
        },
    },
    display: 'flex',
    justifyContent: 'space-between',

    position: 'fixed',
    bottom: '50px',
})
const beforeBase = style({
    width: '48%',
    padding: '3%',
    borderRadius: '10px',
    fontWeight: 'bold',
});
const afterBase = style({
    width: '100%',
    padding: '3%',
    borderRadius: '10px',
    fontWeight: 'bold',
});
export const button = styleVariants({
    beforeinstead: [beforeBase, {background: theme.skyblue, color:theme.blue}],
    beforeAgree: [beforeBase, {background: theme.blue, color:"white"} ],
    afterinstead: [afterBase, {background: theme.skyblue, color:theme.blue} ],
    afterAgree: [afterBase, {background: theme.lightgray, color:theme.lightbrown} ],

})

