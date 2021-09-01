import './styles.css';

export default `
<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        fill="black"
        stroke="black"
>
    <defs>
        <path
                id="star"
                d="M 20 5 l 5 15 l 15 5 l -15 5 l -5 15 l -5 -15 l -15 -5 l 15 -5"
                stroke="none"
        />

        <mask id="mun">
            <rect x="0" y="0" width="400" height="400" fill="white"/>
            <circle class="animating" id="maskCircle" cx="0" cy="0" r="100" fill="black"/>
        </mask>
    </defs>
    <defs>
        <g id="rays">
            <line
                    id="ray1"
                    x1="200" y1="55" x2="200" y2="40"
                    stroke-width="20px" stroke-linecap="round"
            />
            <use id="ray2" href="#ray1" transform="rotate(30, 200, 200)"/>
            <use id="ray3" href="#ray1" transform="rotate(60, 200, 200)"/>

            <use id="ray4" href="#ray1" transform="rotate(90, 200, 200)"/>
            <use id="ray5" href="#ray1" transform="rotate(120, 200, 200)"/>
            <use id="ray6" href="#ray1" transform="rotate(150, 200, 200)"/>

            <use id="ray7" href="#ray1" transform="rotate(180, 200, 200)"/>
            <use id="ray8" href="#ray1" transform="rotate(210, 200, 200)"/>
            <use id="ray9" href="#ray1" transform="rotate(240, 200, 200)"/>

            <use id="ray10" href="#ray1" transform="rotate(270, 200, 200)"/>
            <use id="ray11" href="#ray1" transform="rotate(300, 200, 200)"/>
            <use id="ray12" href="#ray1" transform="rotate(330, 200, 200)"/>
        </g>

        <g id="stars">
            <use x="110" y="100" href="#star"/>
            <use x="180" y="120" href="#star"/>
            <use x="130" y="170" href="#star"/>
        </g>
    </defs>

    <circle cx="200" cy="200" r="100" mask="url(#mun)"/>
    <use class="animating rays" href="#rays"/>
    <use class="animating stars" href="#stars"/>

    <style>
        #maskCircle {
            animation-name: maskCircleMove;
        }

        .rays {
            transform-origin: center;
            animation-name: raysRotate;
        }

        .stars {
            animation-name: starsShow;
        }

        .animating {
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }

        @keyframes maskCircleMove {
            from {
                cx: 0px;
                cy: 0px;
            }
            to {
                cx: 140px;
                cy: 140px;
            }
        }

        @keyframes raysRotate {
            from {
                transform: rotate(0);
                opacity: 1;
            }
            to {
                transform: rotate(180deg);
                opacity: 0;
            }
        }

        @keyframes starsShow {
            0% {
                opacity: 0;
            }
            60% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
</svg>
`.trim();
