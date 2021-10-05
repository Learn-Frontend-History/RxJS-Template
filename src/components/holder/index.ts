import template from "./index.html"
import {Templater} from "@/base/templater";

export class HolderController {
    display = false
    header = 'Holder header'

    show () {
        this.display = true
    }
    hide() {
        this.display = false
    }
}

export const holderController = new HolderController()

new Templater(
    document.getElementById('cards-wrapper'),
    holderController,
    template
)
