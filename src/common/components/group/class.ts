import html from './html'
import {Component} from "@/classes/Component";

export default class Group extends Component {
    constructor(controls: Component[] = [], caption: string = '') {
        super(html);

        this.child('caption').innerText = caption
        controls.forEach(
            control => this.child('border').append(control.component)
        )
    }
}
