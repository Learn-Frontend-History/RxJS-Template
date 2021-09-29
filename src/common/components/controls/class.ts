import html from './index.html'
import './styles.sass';

import {Component} from "@/classes/component";
import Button from "@/components/button/class";


export default class Controls extends Component {
    constructor() {
        super(html);
    }

    show(controls: Button[] = []) {
        this.component.append(
            ...controls.map(
                control => control.component
            )
        )
    }

    hide() {
        this.component.innerHTML = ''
    }
}
