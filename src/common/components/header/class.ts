import html from './html'
import {Component} from "@/classes/Component";

import themeToggleButton from '../../../components/buttons/theme-toggle'
import clearLogButton from '../../../components/buttons/clear-log'

export default class Button extends Component {
    constructor(title: string) {
        super(html);

        this.child('title').innerText = title

        this.child('tools').append(
            themeToggleButton.component,
            clearLogButton.component
        )
    }
}
