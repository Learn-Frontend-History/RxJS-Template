import html from './html'
import {Component} from "@/classes/component";
import CodeLine from "@/components/cardEx/components/code/code-line/class";

export default class CardCode extends Component {
    constructor(caption: string) {
        super(html);

        caption.split('\n').forEach(
            line => this.component.append(
                (new CodeLine(line)).component
            )
        )
    }
}
