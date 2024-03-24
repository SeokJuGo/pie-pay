import {style} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";

export const container = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "space-between"
});

export const logo = style({
    marginTop: "32vh",
    width: "44%"
});