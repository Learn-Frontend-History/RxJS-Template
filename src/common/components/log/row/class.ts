import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import * as moment from "moment"
import {Factory} from "@/base/factory";

export default class LogRow extends Component {
    constructor(message: string) {
        super(html);

        this.component.getElementsByClassName(
            'message'
        )[0].innerHTML = message

        this.component.getElementsByClassName(
            'timestamp'
        )[0].innerHTML = moment().format('HH:mm:ss SSS')
    }
}

Factory.reg('log-row', LogRow)
