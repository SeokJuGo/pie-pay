import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";


export const memberContainer = style({
    position: 'sticky',
    overflowY: 'auto',
    paddingBottom: '100px',
    backgroundColor: theme.layout,

})
export const container = style({
    display: 'flex',
    marginBottom: '8px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: '10px',
    overflow: 'auto',
    width: '100%'
})
export const button = style({

})

export const memberList = style({
    display: 'flex',
    width: '100%',
    alignItems: 'center',

})

export const backgroundSkyBlue = style({
    backgroundColor: theme.skyblue,
})
export const image = style({
    borderRadius: '15px',
    margin: '7px'
})


export const memberName = style({
    fontSize: '10px',
    fontWeight: 'bold'
})

export const checkbox = style({
    marginRight: '10px',
    zIndex: '7'
})

export const checkboxContainer = style({
    position: 'relative',
    zIndex: 0,
})