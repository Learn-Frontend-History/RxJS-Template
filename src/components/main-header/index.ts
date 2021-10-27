import template from './index.html'

import {Templater} from "@/base/templater";
import {logController} from "../log";


class Controller {
    clearLog() {
        logController.clear()
    }
}

new Templater(
    document.getElementById('header'),
    new Controller(),
    template
)
