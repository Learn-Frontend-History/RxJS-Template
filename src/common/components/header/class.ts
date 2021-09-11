import html from './html'
import {Component} from "@/classes/Component";

import ThemeToggle from "@/components/theme-toggle/class";
import ClearLog from "@/components/clear-log/class";

export default class Button extends Component {
    constructor(title: string) {
        super(html);

        this.child('title').innerText = title

        this.child('tools').append(
            (new ClearLog()).component,
            (new ThemeToggle()).component,
        )
    }
}
