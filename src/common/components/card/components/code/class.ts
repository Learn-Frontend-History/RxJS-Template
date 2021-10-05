import html from './index.html'
import './styles.sass';

import {Component} from "@/base/component";
import CodeLine from "@/components/card/components/code/code-line/class";
import {Factory} from "@/base/factory";

export default class CardCode extends Component {
    constructor() {
        super(html);
    }

    setContent(content: string) {
        content.split('\n').forEach(
            line => {
                const codeLine = new CodeLine()
                codeLine.setContent(line)
                this.component.append(codeLine.component)
            }
        )
    }
}

Factory.reg('card-code', CardCode)
