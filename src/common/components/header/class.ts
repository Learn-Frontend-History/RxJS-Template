import html from './index.html'
import './styles.sass'

import {Component} from "@/classes/component"

export default class Header extends Component {
    constructor() {
        super(html);
    }

    append(control: Component) {
        this.child('tools').append(control.component)
    }

    set(name: string, value: any) {
        switch (name) {
            case 'caption':
                this.child('title').innerText = value
                break
            default:
                super.set(name, value)
        }
        super.set(name, value);
    }
}
