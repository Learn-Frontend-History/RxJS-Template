import html from './html'
import {Component} from "@/classes/component";
import ListItem from "@/components/cardEx/components/ordered-list/components/list-item/class";

export default class CardOrderedList extends Component {
    constructor() {
        super(html);
    }

    setContent(content: string) {

        content.split('\n').forEach(
            caption => this.component.append(
                (new ListItem(caption)).component
            )
        )
    }
}
