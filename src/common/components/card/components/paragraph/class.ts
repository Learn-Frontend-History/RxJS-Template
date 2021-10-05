import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import ParagraphAccent from "@/components/card/components/paragraph/components/accent/class"
import ParagraphText from "@/components/card/components/paragraph/components/text/class"
import {Factory} from "@/base/factory";

export default class CardParagraph extends Component {
    constructor() {
        super(html);
    }

    setContent(content: string) {
        const contentParts = content.split('`')

        let accent = false
        contentParts.forEach(
            part => {
                if (part) {
                    this.component.append(
                        (accent ? new ParagraphAccent(part) : new ParagraphText(part)).component
                    )
                }
                accent = !accent
            }
        )
    }
}

Factory.reg('card-paragraph', CardParagraph)
