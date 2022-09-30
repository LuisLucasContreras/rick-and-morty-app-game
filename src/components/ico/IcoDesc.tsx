import React from "react";
import { PropsIco } from "./Cronometro";

const IcoDesc = ({ color, size }: PropsIco) => {
    return (
        <div>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 256.000000 256.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
                    <path
                        d="M312 2160 c-78 -48 -81 -160 -6 -219 27 -21 28 -21 974 -21 946 0
947 0 974 21 75 59 72 171 -6 219 -32 20 -48 20 -968 20 -920 0 -936 0 -968
-20z"
                    />
                    <path
                        d="M844 1660 c-31 -12 -72 -66 -80 -105 -8 -42 19 -100 59 -129 28 -21
40 -21 690 -24 433 -2 674 1 697 7 114 33 133 187 29 243 -32 17 -73 18 -704
17 -368 0 -679 -4 -691 -9z"
                    />
                    <path
                        d="M330 1142 c-43 -21 -80 -75 -80 -116 0 -45 31 -97 71 -118 32 -17 82
-18 959 -18 877 0 927 1 959 18 99 53 89 193 -16 238 -27 12 -194 14 -945 14
-849 0 -915 -1 -948 -18z"
                    />
                    <path
                        d="M811 615 c-73 -62 -60 -179 24 -219 29 -14 112 -16 707 -16 657 0
674 1 706 20 78 48 81 160 6 219 -26 21 -32 21 -720 21 l-692 0 -31 -25z"
                    />
                </g>
            </svg>
        </div>
    );
};

export default IcoDesc;
