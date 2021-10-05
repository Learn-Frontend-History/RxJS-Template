import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"

export default class ListItem extends Component {
    constructor(caption: string) {
        super(html);

        this.component.innerText = caption
    }
}
