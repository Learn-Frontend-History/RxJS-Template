import view from './html'
import {Component} from "@/classes/Component";

type Theme = 'light' | 'dark'

export default class ThemeToggleDark extends Component {
    set current(theme: Theme) {
        localStorage.setItem('theme', theme)
    }

    constructor() {
        super(view);

        this.component.addEventListener(
            'click',
            _ => {
                this.current = 'dark'
            }
        )
    }
}
