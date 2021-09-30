import html from './index.html'
import './styles.sass'

import {Component} from "@/classes/component"
import ListItem from "@/components/card/components/ordered-list/components/list-item/class"

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
