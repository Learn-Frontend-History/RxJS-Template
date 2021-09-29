import html from './index.html'
import './styles.sass';

import {Component} from "@/classes/component";

export default class CardEx extends Component {
    constructor(content: Component[] = []) {
        super(html);

        content.forEach(contentBlock => this.component.append(contentBlock.component))
    }
}
