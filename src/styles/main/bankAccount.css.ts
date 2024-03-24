import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";

export const bankAccountContainer = style({
    position: "relative",
    padding: "6% 4%",
    borderRadius: "16px",
    backgroundColor: theme.cyan,
    color: "white",
    boxShadow: "0 8px 12px" + theme.shadow
})

export const bankLogoContainer = style({
    display: "flex",
    alignItems: "center"
})

export const bankLogo = style({
    padding: "2px",
    backgroundColor: "white",
    borderRadius: "50%",
});

export const bankAccountInfoContainer = style({
    display: "flex",
    flexDirection: "row",
})

export const bankAccountStringContainer = style({
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
})

export const bankName = style({
    fontSize: "1rem",
    lineHeight: "100%"
})

export const bankAccountNumber = style({
    fontSize: "0.9rem"
})

export const bankAccountBalance = style({
    fontSize: "1.3rem",
})

export const visibilityContainer = style({
    position: "absolute",
    top: "14%",
    right: "4%",
})