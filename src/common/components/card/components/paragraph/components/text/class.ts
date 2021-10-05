import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"

export default class ParagraphText extends Component {
    constructor(caption: string) {
        super(html);

        this.component.innerText = caption
    }
}
