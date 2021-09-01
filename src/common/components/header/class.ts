import html from './html'
import {Component} from "@/classes/Component";

import clearLogButton from '../../../components/buttons/clear-log'
import ThemeToggle from "@/components/theme-toggle/class";

export default class Button extends Component {
    constructor(title: string) {
        super(html);

        this.child('title').innerText = title

        this.child('tools').append(
            (new ThemeToggle()).component,
            clearLogButton.component
        )
    }
}
