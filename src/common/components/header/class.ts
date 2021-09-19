import html from './html'
import {Component} from "@/classes/Component";

import ThemeToggle from "@/components/icons/theme-toggle/icon/class";
import ClearLog from "@/components/icons/clear-log/icon/class";

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
