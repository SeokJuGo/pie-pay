import {style,styleVariants} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";


export const progress = (width: number) => style({
    width: `${width}px`,
    backgroundColor: theme.blue
});