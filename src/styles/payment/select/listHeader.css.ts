import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";

export const container = style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

})

export const totalMember = style({
    fontSize: '13px',
    color: theme.gray,

})

export const member = style({
    display: 'flex',
    marginBottom: '10px',

})