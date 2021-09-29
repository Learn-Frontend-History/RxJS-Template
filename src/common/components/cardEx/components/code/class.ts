import html from './index.html'
import './styles.sass';

import {Component} from "@/classes/component";
import CodeLine from "@/components/cardEx/components/code/code-line/class";

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
