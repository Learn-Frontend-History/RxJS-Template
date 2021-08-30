import html from './html'
import {Component} from "@/classes/Component";
import Button from "@/components/button/class";

export default class ButtonGroup extends Component {
    constructor() {
        super(html);
    }

    show(controls: Button[] = []) {
        controls.forEach(
            control => this.component.append(control.component)
        )
    }

    hide() {
        this.component.innerHTML = ''
    }
}
