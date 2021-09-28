import {Holder} from "@/components/holder/class";
import Card, {CardPayload} from "@/components/card/class";
import Button, {ButtonPayload} from "@/components/button/class";
import Group, {GroupPayload} from "@/components/group/class";
import ButtonGroup, {ButtonGroupPayload} from "@/components/button-group/class";
import {SubscriptionHolder} from "../../components/subscription-holder";
import {Observer} from "rxjs";
import {Component} from "@/classes/component";
import CardEx from "@/components/cardEx/class";
import CardHeader from "@/components/cardEx/components/header/class";
import CardParagraph from "@/components/cardEx/components/paragraph/class";
import CardSubHeader from "@/components/cardEx/components/sub-header/class";
import CardCode from "@/components/cardEx/components/code/class";
import CardOrderedList from "@/components/cardEx/components/ordered-list/class";

export class CardsBuilder {
    private container: HTMLElement
    private context: {}

    public holder: SubscriptionHolder

    get observer(): Observer<any> {
        return {
            next: value => console.log(value),
            complete: () => {
                console.log('completed!')
                this.holder.hide()
            },
            error: err => console.log('error', err)
        }
    }

    constructor() {
        this.container = document.getElementById('cards')

        const holder = new Holder()
        document.getElementById('cards-wrapper').append(holder.component)
        this.holder = new SubscriptionHolder(holder)
    }

    setContext(context: {}): null {
        this.context = context

        return null
    }

    addCard(payload: CardPayload): CardsBuilder {
        this.container.append(
            new Card(payload).component
        )

        return this
    }

    addCardEx(content: (Component | void)[]) {
        const components = content.filter(
            item => item instanceof Component
        ) as Component[]

        this.container.append(
            new CardEx(components).component
        )

        return this
    }

    button(payload: ButtonPayload): Button {
        const button = new Button()

        button.setContent(payload.caption)
        button.on('click', payload.click)

        return button
    }

    buttonsGroup(payload: ButtonGroupPayload) {
        const buttonGroup = new ButtonGroup()

        payload.controls.forEach(buttonGroup.append.bind(buttonGroup))
        return buttonGroup
    }

    group(payload: GroupPayload): Group {
        const group = new Group()
        group.set('caption', payload.caption)
        payload.controls.forEach(group.append.bind(group))

        return group
    }

    cardHeader(caption: string) {
        const cardHeader = new CardHeader()
        cardHeader.setContent(caption)

        return cardHeader
    }

    cardSubHeader(caption: string) {
        const cardSubHeader = new CardSubHeader()
        cardSubHeader.setContent(caption)
        return cardSubHeader
    }

    cardParagraph(caption: string) {
        const cardParagraph = new CardParagraph()
        cardParagraph.setContent(caption)
        return cardParagraph
    }

    cardCode(caption: string) {
        const cardCode = new CardCode()
        cardCode.setContent(caption)
        return cardCode
    }

    cardOrderedList(caption: string) {
        const cardOrderedList = new CardOrderedList()
        cardOrderedList.setContent(caption)
        return cardOrderedList
    }
}
