import html from './html'
import ThemeToggleDark from "@/components/icons/theme-toggle/svg-dark/class";
import ThemeToggleLight from "@/components/icons/theme-toggle/svg-light/class";
import Icon from "@/classes/Icon";

export default class ThemeToggle extends Icon {
    constructor() {
        super(
            html,
            () => document.body.className = localStorage.getItem('theme'),
            component => component.append(
                localStorage.getItem('theme') === 'light'
                    ? (new ThemeToggleDark()).component
                    : (new ThemeToggleLight()).component
            )
        );
    }
}
