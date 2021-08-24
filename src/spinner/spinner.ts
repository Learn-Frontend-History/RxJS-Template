import view from './html.js'

export class Spinner {
    static timeExecutingInterval: NodeJS.Timer
    static element: HTMLDivElement
    static startDate: number

    static getExecutingTime(): string {
        function lpadZeros(value: number, count: number = 2): string {
            return `${'0'.repeat(count - value.toString(10).length)}${value}`
        }

        const spend = new Date(Date.now() - Spinner.startDate)

        return `${
            lpadZeros(spend.getMinutes())
        }:${
            lpadZeros(spend.getSeconds())
        } ${
            lpadZeros(spend.getMilliseconds(), 3)
        }`
    }

    static show(stopCallback = null) {
        Spinner.startDate = Date.now()

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

        const timeExecuting = document.getElementById('timeExecuting')

        setTimeout(() => {
            this.element.style.opacity = '70%'
            timeExecuting.style.fontSize = '50px'
        })

        Spinner.timeExecutingInterval = setInterval(() => {
            timeExecuting.innerText = Spinner.getExecutingTime()
        }, 1)
    }

    static hide() {
        setTimeout(() => this.element.style.opacity = '0')
        setTimeout(() => {
            document.getElementById(this.element.id)?.remove()
            clearInterval(Spinner.timeExecutingInterval)
        }, 1000)
    }
}
