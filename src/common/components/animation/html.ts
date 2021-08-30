import './styles.css';

export default `
    <svg
            style="display: none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 0 800 400"
    >
        <style>
            .value {
                animation-name: value;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }

            #value2 {
                animation-delay: .5s;
            }

            @keyframes value {
                from {
                    cx: 10
                }
                to {
                    cx: 780
                }
            }

            .observer {
                animation-timing-function: cubic-bezier(.89, .89, .34, .99);
                animation-iteration-count: infinite;
            }

            #observer1 {
                animation-name: observer1;
                animation-delay: 1s;
                animation-duration: 2s;
            }

            #observer2 {
                animation-name: observer2;
                animation-delay: 2s;
                animation-duration: 2s;
            }

            @keyframes observer1 {
                0% {
                    cy: 200;
                    opacity: 0
                }
                5% {
                    opacity: 100
                }
                25% {
                    cy: 350
                }
                100% {
                    cy: 350
                }
            }

            @keyframes observer2 {
                0% {
                    cy: 200;
                    opacity: 0
                }
                5% {
                    opacity: 100
                }
                25% {
                    cy: 50
                }
                100% {
                    cy: 50
                }
            }
        </style>

        <g id="arrow">
            <line x1="10" y1="200" x2="785" y2="200"/>

            <circle cx="10" cy="200" r="8"/>
            <path d="M 790 200 l -20 -8 10 8 -10 8 Z"/>
        </g>

        <g id="observer1">
            <circle cx="400" cy="350" r="5"/>
            <circle cx="400" cy="350" r="8" fill="none"/>

            <line x1="400" y1="200" x2="400" y2="350"/>
        </g>

        <g id="observer2">
            <circle cx="600" cy="50" r="5"/>
            <circle cx="600" cy="50" r="8" fill="none"/>

            <line x1="600" y1="200" x2="600" y2="50"/>
        </g>

        <g>
            <circle id="value1" class="value" cx="10" cy="200" r="5"/>
            <circle id="observer1" class="observer" cx="400" cy="200" r="5" opacity="0"/>
        </g>

        <g>
            <circle id="value2" class="value" cx="10" cy="200" r="5"/>
            <circle id="observer2" class="observer" cx="600" cy="200" r="5" opacity="0"/>
        </g>
    </svg>
`.trim();
