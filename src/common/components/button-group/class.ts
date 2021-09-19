import html from './html'
import {Component} from "@/classes/Component";
import Button from "@/components/button/class";

export interface ButtonGroupPayload {
    controls: Button[]
}
export default class ButtonGroup extends Component {
    constructor({ controls }: ButtonGroupPayload) {
        super(html);

        controls.forEach(
            control => this.component.append(control.component)
        )
    }
}
