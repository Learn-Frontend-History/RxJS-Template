import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";
import * as moment from "moment";
import {Factory} from "@/base/factory";

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

    set(name: string, value: any) {
        switch (name) {
            case 'active':
                value ? this.start() : this.stop()
                break
            default:
                super.set(name, value);
        }
    }

    private getExecutingTime(): string {
        return moment(Date.now() - this.startTimestamp).format('mm:ss SSS')
    }
}

Factory.reg('execution-time', ExecutionTime)
