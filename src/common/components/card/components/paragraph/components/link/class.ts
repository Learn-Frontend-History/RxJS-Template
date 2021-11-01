import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";

export default class ParagraphLink extends Component {
    constructor(caption: string, href: string) {
        super(html);

        this.setContent(caption)
        this.set('href', href)
    }
}
