import template from "./index.html"
import {Templater} from "@/base/templater";

export class LogRow {
    message: string
}
export class LogSubGroup {
    caption: string
    rows: LogRow[]
}
export class LogGroup {
    caption: string
    subGroups: LogSubGroup[]
}

export class LogController {
    groups: LogGroup[] = []

    public addGroup = (group: LogGroup): LogGroup => {
        this.groups.push(group)

        return this.groups.slice(-1)[0]
    }

    addSubGroup(group: LogGroup, subGroup: LogSubGroup): LogSubGroup {
        group.subGroups.push(subGroup)

        return group.subGroups.slice(-1)[0]
    }

    addRow(subGroup: LogSubGroup, row: LogRow): LogRow {
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
