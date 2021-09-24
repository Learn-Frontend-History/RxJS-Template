import html from './html'
import {Component} from "@/classes/component";

export default class CardHeader extends Component {
    constructor(caption: string) {
        super(html);

        this.component.innerText = caption
    }
}
