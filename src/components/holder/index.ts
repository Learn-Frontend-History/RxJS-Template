import template from "./index.html"
import {Templater} from "@/base/templater";

export class HolderController {
    display = false
    header = 'Holder header'
    timerActive = false

    private stopCallBack: () => void

    show(stopCallBack?: () => void) {
        this.stopCallBack = stopCallBack

        this.timerActive = true
        this.display = true
    }
    hide() {
        if (this.stopCallBack) {
            this.stopCallBack()
        }

        this.timerActive = false
        this.display = false
    }
}

export const holderController = new HolderController()

new Templater(
    document.getElementById('cards-wrapper'),
    holderController,
    template
)
