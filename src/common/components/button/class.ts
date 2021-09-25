import html from './html'
import {Component} from "@/classes/component";

export interface ButtonPayload {
    caption: string,
    click: (event: MouseEvent, context: {}) => void
}

export default class Button extends Component {
    constructor({caption, click}: ButtonPayload, context: {} = null) {
        super(html, context);

        this.child('caption').innerText = caption
        this.component.addEventListener(
            'click',
            event => {
                click(event, context)
            }
        )
    }
}
