import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import {Factory} from "@/base/factory";

export default class Group extends Component {
    constructor() {
        super(html);
    }

    append(controls: Component[]) {
        this.child('content').append(
            ...controls.map(control => control.component)
        )
    }

    set(name: string, value: any) {
        switch (name) {
            case 'caption':
                const caption = this.child('caption')
                caption.innerText = value
                caption.setAttribute('title', value)
                break
            default:
                super.set(name, value)
        }
    }

    setContent(content: string) {
        //
    }
}

Factory.reg('group', Group)
