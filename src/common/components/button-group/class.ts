import html from './html'
import {Component} from "@/classes/Component";
import Button from "@/components/button/class";

export default class ButtonGroup extends Component {
    constructor(controls: Button[] = []) {
        super(html);

        controls.forEach(
            control => this.component.append(control.component)
        )
    }
}
