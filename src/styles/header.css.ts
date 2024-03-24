import { style } from '@vanilla-extract/css';
import theme from "@/styles/theme/theme";


export const container = style({
    zIndex: "5",
    backdropFilter: "blur(8px)",
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '7%',
    paddingRight: '7%',
    height: '9%',
    backgroundColor: theme.header,
    position: "fixed",
    width: "100%",
    '@media': {
        'screen and (min-width: 768px)': {
            width: '40%',
            left: '30%',
            paddingLeft: '2.8%',
            paddingRight: '2.8%',
        },
    },
});

export const navigation = style({
    display: 'flex',
    justifyContent: 'space-around',
});

export const logoContainer = style({
    display: "flex",
    alignItems: "center"
});

export const headerLogo = style({
    height: "40%",
    width: "100%",
    textAlign: "start"
});

export const buttonContainer = style({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1.5rem",
    fontSize: "0.8rem",
    cursor: "pointer",
    '@media': {
        'screen and (min-width: 768px)': {
            marginLeft: "0.9rem",
        },
    },
});
