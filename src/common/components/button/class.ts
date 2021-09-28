import html from './html'
import {Component} from "@/classes/component";

export interface ButtonPayload {
    caption: string,
    click: (event: MouseEvent, context: {}) => void
}

export default class Button extends Component {
    constructor() {
        super(html);
    }
}
