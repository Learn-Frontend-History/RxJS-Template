import html from './html'
import {Component} from "@/classes/component";

export default class Animation extends Component {
    constructor() {
        super(html);
    }

    show() {
        this.component.style.display = 'block'
    }

    hide() {
        this.component.style.display = 'none'
    }
}
