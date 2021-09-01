import html from './html'
import {Component} from "@/classes/Component";
import ThemeToggleDark from "@/components/theme-toggle-dark/class";
import ThemeToggleLight from "@/components/theme-toggle-light/class";

export default class ThemeToggle extends Component {
    constructor() {
        super(html);

        this.createButton()

        this.component.addEventListener(
            'click',
            _ => {
                document.body.className = localStorage.getItem('theme')

                this.component.innerHTML = null

                this.createButton()
            }
        )
    }

    private createButton() {
        this.component.append(
            localStorage.getItem('theme') === 'light'
                ? (new ThemeToggleDark()).component
                : (new ThemeToggleLight()).component
        )
    }
}
