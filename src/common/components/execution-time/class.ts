import html from './html'
import {Component} from "@/classes/Component";

export default class ExecutionTime extends Component {
    private startTimestamp: number
    private updateInterval: NodeJS.Timer
    constructor() {
        super(html);
    }

    start() {
        this.startTimestamp = Date.now()

        setTimeout(() => {
            this.component.style.fontSize = '50px'
        })

        this.updateInterval = setInterval(() => {
            this.component.innerText = this.getExecutingTime()
        }, 1)
    }

    stop() {
        clearInterval(this.updateInterval)
    }

    private getExecutingTime(): string {
        const spend = new Date(Date.now() - this.startTimestamp)

        return `${
            this.lpadZeros(spend.getMinutes())
        }:${
            this.lpadZeros(spend.getSeconds())
        } ${
            this.lpadZeros(spend.getMilliseconds(), 3)
        }`
    }

    private lpadZeros = (
        value: number, count: number = 2
    ): string => `${'0'.repeat(count - value.toString(10).length)}${value}`;
}
