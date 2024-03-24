import {globalStyle, style, styleVariants} from "@vanilla-extract/css";
import theme from "@/styles/theme/theme";

// Card Layout
const cardContainer = style({
    backgroundColor: "white",
    borderRadius: "16px",
    marginBottom: "2.2%",
    padding: "4% 4%",
    boxShadow: "0 8px 12px" + theme.shadow
});

export const cardLayout = styleVariants({
    meetGroup: [cardContainer],
    joinMeetGroup: [cardContainer, {
        padding: "12% 8%",
    }]
});

// Card Line Layout

const lineContainer = style({
    display: "flex",

})

export const lineLayout = styleVariants({
    lineOne: [lineContainer, {
        justifyContent: "space-between",
        marginBottom: "1.8rem"
    }],
    lineTwo: [lineContainer, {
        justifyContent: "space-between",
    }],
})

export const lineLayoutJoin = styleVariants({
    lineOne: [lineContainer, {
        justifyContent: "space-between",
        marginBottom: "1.8rem"
    }],
    lineTwo: [lineContainer, {
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
    }],
    lineThree: [lineContainer, {
        justifyContent: "end",
    }],
    lineThreeModal: [lineContainer, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end"
    }]
})

export const codeContainer = style({
    display: "flex",
    marginBottom: "3.5rem"
});

export const codeInput = style({
    width: "100%",
    padding: "0 4%",
    marginTop: "2rem",
    borderRadius: "0.15rem",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "2.5rem",
    transition: "all 0.15s ease-in-out",
    selectors: {
        '&::placeholder': {
            color: theme.lightGray
        },
        '&:focus': {
            backgroundColor: theme.skyblue,
            outline: "none"
        }
    }
});

export const modalInput = style({
    width: "100%",
    padding: "0 4%",
    marginTop: "2rem",
    borderRadius: "0.15rem",
    textTransform: "uppercase",
    fontSize: "2rem",
    transition: "all 0.15s ease-in-out",
    selectors: {
        '&::placeholder': {
            color: theme.lightGray
        },
        '&:focus': {
            backgroundColor: theme.skyblue,
            outline: "none"
        }
    }
});

export const codeBox = style({
    margin: "0 0.2rem",
});

export const codeUnderline = style({
    width: "100%",
    height: "0.3rem",
    borderRadius: "0.15rem",
    backgroundColor: theme.skyblue,
    transition: "all 0.2s ease-in-out"
});

export const wrongMessage = style({
    position: "absolute",
    top: "6.5rem",
    color: theme.red,
    visibility: "visible",
    transition: "all 0.2s ease-in-out"
});

export const none = style({
    color: "white"
})

export const wrong = style({
    backgroundColor: theme.red
})

export const right = style({
    backgroundColor: theme.blue
})

// Card Button Layout

const buttonContainer = style({
    padding: "2.5% 6%",
    borderRadius: "30px",
    backgroundColor: theme.skyblue,
    color: theme.blue,
    fontSize: "0.9rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordBreak: "break-all",
    transition: "all 0.35s ease-in-out"
});

export const cardButton = styleVariants({
    paymentButton: [buttonContainer],
    joinButton: [buttonContainer, {
        padding: "4% 18%",
        fontSize: "1.2rem"
    }],
    joinButtonDisabled: [buttonContainer, {
        padding: "4% 18%",
        fontSize: "1.2rem",
        backgroundColor: theme.lightGray,
        color: "white"
    }]
});

export const modalExitButton = style({
    textDecoration: "underline",
    textUnderlineOffset: "0.3rem",
    color: theme.blueGray,
    fontSize: "1.4rem",
    marginBottom: "6%"
});

globalStyle(`${cardLayout.joinMeetGroup} > h3`, {
    fontSize: "1.5rem",
    lineHeight: "1.8rem",
    marginBottom: "0.4rem"
});

globalStyle(`${cardLayout.joinMeetGroup} > p`, {
    fontSize: "1rem",
    color: theme.gray
});

export const meetInfo = style({
    display: "flex"
})

export const meetInfoString = style({
    whiteSpace: "nowrap",
    wordBreak: "break-all",
    marginLeft: "0.8rem"
})

export const meetName = style({
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordBreak: "break-all",
})

export const meetDate = style({
    fontSize: "0.9rem",
    color: theme.gray
})

export const meetImageContainer = style({
    display: "flex",
    alignItems: "center"
})

export const meetImage = style({
    borderRadius: "12px",
})

export const meetMemberImage = style({
    borderRadius: "50%",
    marginRight: "0.25rem"
})

export const profileImageContainer = style({
    display: "flex",
    alignItems: "center"
})

export const meetMemberNumber = style({
    color: theme.blueGray,
    fontSize: "1.2rem"
})
