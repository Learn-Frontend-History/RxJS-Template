import html from './html'
import {Component} from "@/classes/Component";
import * as moment from "moment";

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
        return moment(Date.now() - this.startTimestamp).format('mm:ss SSS')
    }
}
