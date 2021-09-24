import html from './html'
import {Component} from "@/classes/component";

export default class CardSubHeader extends Component {
    constructor(caption: string) {
        super(html);

        this.component.innerText = caption
    }
}
