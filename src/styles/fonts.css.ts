import {globalFontFace, globalStyle, style} from "@vanilla-extract/css";

const pretendardSemibold = 'Pretendard-Semibold';

globalFontFace(pretendardSemibold, {
    src: "url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff')",
    fontWeight: 600,
    fontStyle: 'normal',
    fontDisplay: 'swap'
});

export const semibold = style({
    fontFamily: pretendardSemibold
});

const pretendardBold = 'Pretendard-Bold';

globalFontFace(pretendardBold, {
    src: "url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff')",
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap'
});

export const bold = style({
    fontFamily: pretendardBold
});