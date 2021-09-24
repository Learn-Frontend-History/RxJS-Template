import html from './html'
import {Component} from "@/classes/component";
import ListItem from "@/components/cardEx/components/ordered-list/components/class";

export default class CardOrderedList extends Component {
    constructor(items: string[]) {
        super(html);

        items.forEach(
            caption => this.component.append(
                (new ListItem(caption)).component
            )
        )
    }
}
