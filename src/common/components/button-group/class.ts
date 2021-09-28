import html from './html'
import {Component} from "@/classes/component";
import Button from "@/components/button/class";

export interface ButtonGroupPayload {
    controls: Button[]
}
export default class ButtonGroup extends Component {
    constructor() {
        super(html);
    }
}
