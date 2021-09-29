import svg from './animation.svg'
import './styles.sass';
import {Component} from "@/classes/component";

export default class Animation extends Component {
    constructor() {
        super(svg);
    }

    show() {
        this.component.style.display = 'block'
    }

    hide() {
        this.component.style.display = 'none'
    }
}
