import html from './html'
import {Component} from "@/classes/Component";

export default class Group extends Component {
    constructor(controls: Component[] = []) {
        super(html);

        controls.forEach(
            control => this.child('border').append(control.component)
        )
    }
}
