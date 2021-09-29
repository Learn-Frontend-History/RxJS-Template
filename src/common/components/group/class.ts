import html from './index.html'
import './styles.sass'

import {Component} from "@/classes/component"

export default class Group extends Component {
    constructor() {
        super(html);
    }

    append(control: Component) {
        this.child('content').append(control.component)
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
