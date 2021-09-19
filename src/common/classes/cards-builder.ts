import {Holder} from "@/components/holder/class";
import Card, {CardPayload} from "@/components/card/class";
import Button, {ButtonPayload} from "@/components/button/class";
import Group, {GroupPayload} from "@/components/group/class";
import ButtonGroup, {ButtonGroupPayload} from "@/components/button-group/class";
import {SubscriptionHolder} from "../../components/subscription-holder";
import {Observer} from "rxjs";

export class CardsBuilder {
    private container: HTMLElement
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

    addCard(payload: CardPayload): CardsBuilder {
        this.container.append(
            new Card(payload).component
        )

        return this
    }

    button(payload: ButtonPayload): Button {
        return new Button(payload)
    }

    buttonsGroup(payload: ButtonGroupPayload) {
        return new ButtonGroup(payload)
    }

    group(payload: GroupPayload): Group {
        return new Group(payload)
    }

}
