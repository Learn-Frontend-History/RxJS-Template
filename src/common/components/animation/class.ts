const svg = require('./animation.svg')
import './styles.sass';
import {Component} from "@/classes/component";

export default class Animation extends Component {
    constructor() {
        super(svg);
    }

    show() {
        this.set('display', true)
    }

    hide() {
        this.set('display', false)
    }

    set(name, value) {
        switch (name) {
            case 'display':
                this.component.style.display = value ? 'block' : 'hide'
                break
            default:
                super.set(name, value)
        }
    }
}
