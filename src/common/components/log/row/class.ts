import html from './html'
import {Component} from "@/classes/Component";

export default class LogRow extends Component {
    constructor(message: string) {
        super(html);

        this.component.getElementsByClassName(
            'message'
        )[0].innerHTML = message

        this.component.getElementsByClassName(
            'timestamp'
        )[0].innerHTML = (new Date()).toISOString()
    }
}
