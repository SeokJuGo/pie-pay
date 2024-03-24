import React, { SVGProps } from "react";
import theme from "@/styles/theme/theme";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
    color?: string;
}

const MeetingIcon: React.FC<SvgComponentProps> = ({color, ...props}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        viewBox="0 -960 960 960"
        {...props}
    >
        <path d="M240-120q-66 0-113-47T80-280q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm480 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM480-364q-32 0-54-22t-22-54q0-32 22-54t54-22q32 0 54 22t22 54q0 32-22 54t-54 22Zm0-196q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"
        fill={color || theme.blueGray}/>
    </svg>
);

export default MeetingIcon;