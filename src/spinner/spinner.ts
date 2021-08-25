import view from './html.js'
import {Button} from "../common/interfaces/Button";
import {ButtonsGenerator} from "../common/Classes/ButtonsGenerator";

export class Spinner {
    private static timeExecutingInterval: NodeJS.Timer
    private static element: HTMLDivElement
    private static startDate: number

    public static show(stopCallback = null, controls?: Button[]) {
        this.startDate = Date.now()

        this.addSpinner()

        this.bindStopClick(stopCallback)

        if (controls) {
            this.addControls(controls)
        }

        this.startShowAnimation()
    }

    public static hide() {
        this.startHideAnimation()

        this.clear()
    }

    private static getExecutingTime(): string {
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

    private static addSpinner() {
        const parser = new DOMParser()
        this.element = parser.parseFromString(
            view,
            'text/html'
        ).body.firstChild as HTMLDivElement

        document.getElementById(
            'container'
        ).append(this.element)
    }

    private static bindStopClick(stopCallback) {
        document.getElementById(
            'stop'
        ).addEventListener('click', () => {
            Spinner.hide()
            if (stopCallback instanceof Function) {
                stopCallback()
            }
        })
    }

    private static startShowAnimation() {
        const timeExecuting = document.getElementById('timeExecuting')

        setTimeout(() => {
            this.element.style.opacity = '70%'
            timeExecuting.style.fontSize = '50px'
        })

        Spinner.timeExecutingInterval = setInterval(() => {
            timeExecuting.innerText = Spinner.getExecutingTime()
        }, 1)
    }

    private static startHideAnimation() {
        setTimeout(() => this.element.style.opacity = '0')
    }

    private static clear() {
        setTimeout(() => {
            document.getElementById(this.element.id)?.remove()
            clearInterval(Spinner.timeExecutingInterval)
        }, 1000)
    }

    private static addControls(controls: Button[]) {
        const parser = new DOMParser()
        document.getElementById('controls').append(
            parser.parseFromString(`
                ${ButtonsGenerator.generate(controls)}`,
                'text/html'
            ).body.firstChild
        )

        ButtonsGenerator.bindClicks(controls)
    }
}
