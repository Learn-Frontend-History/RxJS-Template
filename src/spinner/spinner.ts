import view from './html.js'

export class Spinner {
    static element: HTMLDivElement
    static show(stopCallback = null) {
        const parser = new DOMParser()
        this.element = parser.parseFromString(
            view,
            'text/html'
        ).body.firstChild as HTMLDivElement

        document.getElementById(
            'container'
        ).append(this.element)

        document.getElementById(
            'stop'
        ).addEventListener('click', () => {
            Spinner.hide()
            if (stopCallback instanceof Function) {
                stopCallback()
            }
        })

        setTimeout(() => {
            this.element.style.opacity = '70%'
        })
    }
    static hide() {
        setTimeout(() => this.element.style.opacity = '0')
        setTimeout(() => document.getElementById(this.element.id)?.remove(), 1000)
    }
}
