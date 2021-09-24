import html from './html'
import {Component} from "@/classes/component";

export default class CodeLine extends Component {
    constructor(caption: string) {
        super(html);

        this.child('line').innerText = caption
    }
}
