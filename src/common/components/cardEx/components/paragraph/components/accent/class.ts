import html from './index.html'
import './styles.sass';

import {Component} from "@/classes/component";

export default class ParagraphAccent extends Component {
    constructor(caption: string) {
        super(html);

        this.component.innerText = caption
    }
}
