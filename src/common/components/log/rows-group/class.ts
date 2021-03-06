import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";
import GroupToggle from "@/components/icons/toggle/icon/class";
import {Factory} from "@/base/factory";

export default class LogRowsGroup extends Component {
    get rows(): HTMLElement {
        return this.child('rows')
    }

    constructor() {
        super(html);

        this.child('collapse').append(
            (new GroupToggle(
                flag => flag ? this.collapse() : this.expand()
            )).component
        )
    }

    expand() {
        this.set('collapse', false)
    }

    collapse() {
        this.set('collapse', true)
    }

    set(name: string, value: any) {
        switch (name) {
            case 'caption':
                this.child('caption').innerText = value
                break
            case 'collapse':
                if (value) {
                    this.child('rows').classList.add('collapse')
                } else {
                    this.child('rows').classList.remove('collapse')
                }
                break
            default:
                super.set(name, value);
        }
    }

    append(controls: Component[]) {
        this.rows.append(
            ...controls.map(control => control.component)
        )
    }

    setContent(content: string) {
        //
    }

    clear() {
        this.rows.innerHTML = ''
    }
}

Factory.reg('log-rows-group', LogRowsGroup)
