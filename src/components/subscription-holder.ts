import { Holder, ShowOptions } from "@/components/holder/class";
import { Subscription } from "rxjs";
import Button from "@/components/button/class";

export class SubscriptionHolder {
    constructor(
        private holder: Holder,
        private subscription: Subscription,
        private options: ShowOptions = {}
    ) {
        if (!this.options.controls) {
            this.options.controls = []
        }

        this.options.controls.push(
            (new Button('STOP', () => {
                this.hide()
            }))
        )

        this.holder.show(this.options)
    }

    hide() {
        this.subscription.unsubscribe()
        this.holder.hide()
    }
}
