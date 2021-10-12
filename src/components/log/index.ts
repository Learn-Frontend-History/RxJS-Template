import template from "./index.html"
import {Templater} from "@/base/templater";

export class LogController {
    groups = []

    public addGroup = (group: any): any => {
        this.groups.push(group)

        return this.groups.slice(-1)[0]
    }

    addRow(group: any, row: any) {
        group.rows.push(row)
    }
}

export const logController = new LogController()

new Templater(
    document.getElementById('log'),
    logController,
    template
)
