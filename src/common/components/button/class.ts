import html from './html'
import {Component} from "@/classes/component";

export interface ButtonPayload {
    caption: string,
    click: (event: MouseEvent) => void
}

export default class Button extends Component {
    constructor({caption, click}: ButtonPayload) {
        super(html);

        this.child('caption').innerText = caption
        this.component.addEventListener(
            'click',
            event => {
                click(event)
            }
        )
    }
}
