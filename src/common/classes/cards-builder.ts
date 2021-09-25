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
        return new Button(payload, this.context)
    }

    buttonsGroup(payload: ButtonGroupPayload) {
        return new ButtonGroup(payload)
    }

    group(payload: GroupPayload): Group {
        return new Group(payload)
    }

    cardHeader(caption: string) {
        return new CardHeader(caption)
    }

    cardSubHeader(caption: string) {
        return new CardSubHeader(caption)
    }

    cardParagraph(caption: string) {
        return new CardParagraph(caption)
    }

    cardCode(caption: string) {
        return new CardCode(caption)
    }

    cardOrderedList(items: string[]) {
        return new CardOrderedList(items)
    }
}
