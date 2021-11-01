import template from "./index.html"
import {Templater} from "@/base/templater";

export class HolderController {
    display = false
    header = 'Holder header'

    private stopCallBack: () => void

    show(stopCallBack?: () => void) {
        this.stopCallBack = stopCallBack

        this.display = true
    }
    hide() {
        if (this.stopCallBack) {
            this.stopCallBack()
        }

        this.display = false
    }
}

export const holderController = new HolderController()

new Templater(
    document.getElementById('cards-wrapper'),
    holderController,
    template
)
