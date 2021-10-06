import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import * as moment from "moment"
import {Factory} from "@/base/factory";

export default class LogRow extends Component {
    constructor() {
        super(html);

        this.set('timestamp', moment().format('HH:mm:ss SSS'))
    }

    set(name: string, value: any) {
        switch (name) {
            case 'message':
                this.child('message').innerText = value
                break
            case 'timestamp':
                this.child('timestamp').innerText = value
                break
            default:
                super.set(name, value);
        }
    }

    setContent(content: string) {
        //
    }
}

Factory.reg('log-row', LogRow)
