import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";
import GroupToggle from "@/components/icons/toggle/icon/class";
import {Factory} from "@/base/factory";

export default class LogRowsGroup extends Component {
    get rows(): HTMLElement {
        return this.child('rows')
    }

    constructor(caption: string) {
        super(html);

        this.child('caption').innerText = caption
        this.child('collapse').append(
            (new GroupToggle(
                flag => flag ? this.collapse() : this.expand()
            )).component
        )
    }

    expand() {
        this.child('rows').classList.remove('collapse')
    }

    collapse() {
        this.child('rows').classList.add('collapse')
    }
}

Factory.reg('log-rows-group', LogRowsGroup)
