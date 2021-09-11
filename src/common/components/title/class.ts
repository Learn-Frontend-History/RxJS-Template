import html from './html'
import {Component} from "@/classes/Component";

export default class Title extends Component {
    constructor() {
        super(html);
    }

    show(text: string) {
        this.component.innerText = text
        this.component.style.display = 'inline-block'
    }

    hide() {
        this.component.style.display = 'none'
    }
}