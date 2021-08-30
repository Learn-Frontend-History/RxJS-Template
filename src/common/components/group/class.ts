import html from './html'
import {Component} from "@/classes/Component";

export default class Group extends Component {
    constructor() {
        super(html);
    }

    show(controls: Component[] = []) {
        controls.forEach(
            control => this.component.append(control.component)
        )
    }

    hide() {
        this.component.innerHTML = ''
    }
}
