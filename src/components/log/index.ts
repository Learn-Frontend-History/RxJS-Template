import template from "./index.html"
import {Templater} from "@/base/templater";

export class LogController {
    staticRows = [{message: 41}, {message: 42}, {message: 43}]
    get groups(): any[] {
        const groups = []
        for (let i = 1; i < 5; i++ ) {
            const subGroups = []
            for (let j = 1; j < 5; j++ ) {
                const rows = []
                for (let k = 1; k < 5; k++ ) {
                     rows.push({message: `${i}.${j}.${k}`})
                }

                subGroups.push({rows, caption: `${i}.${j}`})
            }

            groups.push({subGroups, caption: `${i}`})

        }

        return groups
    }
}

export const logController = new LogController()

new Templater(
    document.getElementById('log'),
    logController,
    template
)
