import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import {Factory} from "@/base/factory";

export default class Header extends Component {
    constructor() {
        super(html);
    }

    append(controls: Component[]) {
        this.child('tools').append(
            ...controls.map(control => control.component)
        )
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

Factory.reg('header', Header)
