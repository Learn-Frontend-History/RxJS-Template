import html from './html'
import {Component} from "@/classes/Component";
import LogRow from "@/components/log/row/class";

export default class Log extends Component {
    constructor() {
        super(html);
    }

    add(message) {
        const row = new LogRow(message)
        this.component.append(row.component)
    }

    clear() {
        this.component.innerHTML = ''
    }
}
