import html from './index.html'
import './styles.sass'

import {Component} from "@/base/component"
import ParagraphAccent from "@/components/card/components/paragraph/components/accent/class"
import ParagraphText from "@/components/card/components/paragraph/components/text/class"
import {Factory} from "@/base/factory";
import ParagraphLink from "@/components/card/components/paragraph/components/link/class";

export default class CardParagraph extends Component {
    constructor() {
        super(html);
    }

    setContent(content: string) {
        const regExpAccentCaption = '[^`]+'
        const regExpAccent = `\`${regExpAccentCaption}\``
        const regExpLinkCaption = '[^\\)]+'
        const regExpLinkHref = '[^\\]]+'
        const regExpLink = `\\(${regExpLinkCaption}\\)\\[${regExpLinkHref}\\]`
        const regExpText = `(.+?)(?=${regExpAccent}|${regExpLink}|$)`

        content.trim().match(new RegExp(
            `(${regExpAccent})|(${regExpLink})|${regExpText}`,
            'g'
        )).map(part => {
            switch (part[0]) {
                case '(':
                    const linkGroups = part.match(
                        new RegExp(
                            `\\((?<caption>${regExpLinkCaption})\\)\\[(?<href>${regExpLinkHref})\\]`
                        )
                    ).groups

                    this.component.append(
                        new ParagraphLink(linkGroups.caption, linkGroups.href).component
                    )
                    break
                case '`':
                    const accentGroups = part.match(
                        new RegExp(
                            `\`(?<caption>${regExpAccentCaption})\``
                        )
                    ).groups

                    this.component.append(
                        new ParagraphAccent(accentGroups.caption).component
                    )
                    break
                default:
                    this.component.append(
                        new ParagraphText(part).component
                    )
            }
        })
    }
}

Factory.reg('card-paragraph', CardParagraph)
