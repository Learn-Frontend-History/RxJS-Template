import Button from "../../common/components/button/class";

export default new Button(
    'Theme',
    _ => {
        const map = {
            light: 'dark',
            dark: 'light'
        }

        localStorage.setItem(
            'theme',
            document.body.className = map[document.body.className]
        )
    }
)
