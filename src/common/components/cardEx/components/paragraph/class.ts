import html from './html'
import {Component} from "@/classes/component";
import ParagraphAccent from "@/components/cardEx/components/paragraph/components/accent/class";
import ParagraphText from "@/components/cardEx/components/paragraph/components/text/class";

export default class CardParagraph extends Component {
    constructor(caption: string) {
        super(html);

        const captionParts = caption.split('`')

        let accent = false
        captionParts.forEach(
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
