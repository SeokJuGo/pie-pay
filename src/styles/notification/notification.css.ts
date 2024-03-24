import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";


export const container = style({
    display: 'flex',
    flexDirection: 'column'
})

export const paragraph = style({
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '10px',


})