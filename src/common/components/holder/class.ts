import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import {Factory} from "@/base/factory";

export class Holder extends Component {
    constructor() {
        super(html);

        const animation = Factory.create('animation')
        animation.set('display', true)

        const executionTime = Factory.create('execution-time')
        executionTime.set('active', true)

        this.child('animation').append(animation.component)
        this.child('execution-time').append(executionTime.component)

    }

    set(name, value) {
        switch (name) {
            case 'header':
                this.child('header').innerText = value
                break
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
        this.child('controls').append(
            ...controls.map(control => control.component)
        )
    }

    setContent(content: string) {
        //
    }
}

Factory.reg('holder', Holder)
