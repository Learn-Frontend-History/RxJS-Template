import html from './index.html'
import './styles.sass';

import {Component} from "@/classes/component";

export default class CodeLine extends Component {
    constructor() {
        super(html);
    }

    setContent(content: string) {
        this.child('line').innerText = content
    }
}
