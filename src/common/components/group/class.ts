import html from './html'
import {Component} from "@/classes/Component";

export interface GroupPayload {
    controls: Component[], caption: string
}
export default class Group extends Component {
    constructor({controls, caption = ''}: GroupPayload) {
        super(html);

        this.child('caption').innerText = caption
        this.child('caption').setAttribute('title', caption)

        controls.forEach(
            control => this.child('content').append(control.component)
        )
    }
}
