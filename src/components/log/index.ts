import template from "./index.html"
import {Templater} from "@/base/templater";

export class LogController {
    groups = []
}

export const logController = new LogController()

new Templater(
    document.getElementById('log'),
    logController,
    template
)
