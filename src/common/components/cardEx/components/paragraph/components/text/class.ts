import html from './html'
import {Component} from "@/classes/component";

export default class ParagraphText extends Component {
    constructor(caption: string) {
        super(html);

        this.component.innerText = caption
    }
}
