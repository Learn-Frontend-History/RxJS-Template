import template from "./index.html"
import {Templater} from "@/base/templater";

export class LogController {
    groups = []

    public addGroup = (group: any): any => {
        this.groups.push(group)

        return this.groups.slice(-1)[0]
    }

    addSubGroup(group: any, subGroup: any) {
        group.subGroups.push(subGroup)

        return group.subGroups.slice(-1)[0]
    }

    addRow(subGroup: any, row: any) {
        subGroup.rows.push(row)

        return subGroup.rows.slice(-1)[0]
    }

    clear() {
        this.groups = []
    }
}

export const logController = new LogController()

new Templater(
    document.getElementById('log'),
    logController,
    template
)
