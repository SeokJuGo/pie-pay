import {globalStyle, style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";

export const mainContainer = style({
    padding: "4% 6% 0 6%",
    '::-webkit-scrollbar': {
        width: '3px'
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#D3D3D3'
    },
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    overflowY: 'auto',
})

globalStyle(`${mainContainer} > *:first-child`, {
    marginTop: "24%",
})

export const categoryContainer = style({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    marginTop: "10%",
    marginBottom: "3%"
})

export const joinButton = style({
    textDecoration: "underline",
    textUnderlineOffset: "0.3rem",
    color: theme.blueGray
})

export const category = style({
    display: "flex"
})

globalStyle(`${category} > p`, {
    marginLeft: "0.4rem"
});
