import html from './index.html'
import './styles.sass'

import {Component} from "@/classes/component"

import ThemeToggle from "@/components/icons/theme-toggle/icon/class"
import ClearLog from "@/components/icons/clear-log/icon/class"

export default class Header extends Component {
    constructor(title: string) {
        super(html);

        this.child('title').innerText = title

        this.child('tools').append(
            (new ClearLog()).component,
            (new ThemeToggle()).component,
        )
    }
}
