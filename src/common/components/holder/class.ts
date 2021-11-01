import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import {Factory} from "@/base/factory";

export class Holder extends Component {
    constructor() {
        super(html)
    }

    set(name, value) {
        switch (name) {
            case 'display':
                if (value) {
                    this.component.style.display = 'grid'
                    this.component.style.opacity = '1'
                } else {
                    this.component.style.display = 'none'
                    this.component.style.opacity = '0'
                }
                break
            default:
                super.set(name, value)
        }
    }

    append(controls: Component[]) {
        this.component.append(
            ...controls.map(control => control.component)
        )
    }

    setContent(content: string) {
        //
    }
}

Factory.reg('holder', Holder)
