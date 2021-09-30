import './styles.sass';
import svg from './icon.svg'
import {Component} from "@/classes/component";

type Theme = 'light' | 'dark'

export default class ThemeToggleLight extends Component {
    set current(theme: Theme) {
        localStorage.setItem('theme', theme)
    }

    constructor() {
        super(svg);

        this.component.addEventListener(
            'click',
            _ => {
                this.current = 'light'
            }
        )
    }
}
