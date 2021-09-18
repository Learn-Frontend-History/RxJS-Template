import html from './html'
import {Component} from "@/classes/Component";

export default class Button extends Component {
    constructor(caption: string, click: (event: MouseEvent) => void) {
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
