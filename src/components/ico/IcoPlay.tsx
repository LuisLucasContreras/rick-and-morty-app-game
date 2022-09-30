import React from "react";
import { PropsIco } from "./Cronometro";

const IcoPlay = ({ color, size }: PropsIco) => {
    return (
        <div>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
                    <path
                        d="M1415 4683 c-178 -24 -365 -151 -434 -297 -42 -87 -60 -171 -71 -338
-13 -189 -13 -2787 0 -2976 17 -249 55 -356 165 -466 129 -127 316 -192 478
-166 137 22 275 96 622 333 792 543 1774 1220 1840 1270 118 89 207 184 244
258 79 161 79 357 0 518 -37 74 -126 169 -244 258 -137 102 -2003 1382 -2129
1459 -205 126 -331 166 -471 147z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default IcoPlay;
