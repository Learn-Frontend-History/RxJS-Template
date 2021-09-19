import html from './html'
import ThemeToggleDark from "@/components/icons/theme-toggle/svg-dark/class";
import ThemeToggleLight from "@/components/icons/theme-toggle/svg-light/class";
import Toggle from "@/classes/toggle";

export default class ThemeToggle extends Toggle {
    constructor() {
        super(
            html,
            (new ThemeToggleLight()).component,
            (new ThemeToggleDark()).component,
            flag => {
                document.body.classList.toggle('light')
                document.body.classList.toggle('dark')

                localStorage.setItem('theme', flag ? 'light': 'dark')
            },
            localStorage.getItem('theme') === 'light'
        );
    }
}
