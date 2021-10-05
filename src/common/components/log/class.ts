import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";
import LogRow from "@/components/log/row/class";
import LogRowsGroup from "@/components/log/rows-group/class";
import {Factory} from "@/base/factory";

export default class Log extends Component {
    private currentGroup: LogRowsGroup

    constructor() {
        super(html);
    }

    add(message) {
        const parent = this.currentGroup?.rows ?? this.component

        parent.append((new LogRow(message)).component)
    }

    clear() {
        this.component.innerHTML = ''
    }

    group(caption: string) {
        this.currentGroup = new LogRowsGroup(caption)
        this.component.append(
            this.currentGroup.component
        )
    }

    groupEnd() {
        this.currentGroup = null
    }
}

Factory.reg('log', Log)
