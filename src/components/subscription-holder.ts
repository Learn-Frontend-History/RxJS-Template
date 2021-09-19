import { Holder, ShowOptions } from "@/components/holder/class";
import { Subscription } from "rxjs";
import Button from "@/components/button/class";

export class SubscriptionHolder {
    private subscription: Subscription

    constructor(
        private holder: Holder,
    ) {}

    show(subscription: Subscription, options: ShowOptions = {}) {
        this.subscription = subscription
        this.holder.show(
            this.addStopButton(
                options
            )
        )
    }

    hide() {
        this.subscription.unsubscribe()
        this.holder.hide()
    }

    private addStopButton(options: ShowOptions) {
        if (!options.controls) {
            options.controls = []
        }

        options.controls.push(
            new Button({
                caption: 'STOP',
                click: () => {
                    this.hide()
                }
            })
        )

        return options
    }
}
