import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";


export const participantContainer = style({
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
    width: '100%',
    paddingRight: '5%'
})
export const button = style({

})

export const participantList = style({
    display: 'flex',
    width: '100%',
    alignItems: 'center',

})

export const backgroundSkyBlue = style({
    backgroundColor: theme.skyblue,
})
export const backgroundLightRed = style({
    backgroundColor: theme.lightred,
})

export const image = style({
    borderRadius: '15px',
    margin: '7px'
})
