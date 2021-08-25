import {Button} from "../interfaces/Button";
import {MergeButton} from "../interfaces/MergeButton";

export class ButtonsGenerator {
    static generate(buttons: Button[]): string {
        return buttons.reduce<string[]>(
            (htmlButtons, buttonMeta) => {
                htmlButtons.push(`
                <button
                    class="${this.getMergeClass(buttonMeta.mergeTo)}"
                    id="${buttonMeta.id}"
                    ${buttonMeta.title ? `title="${buttonMeta.title}"` : ''}
                > ${buttonMeta.caption} </button>
            `.trim())

                return htmlButtons
            },
            []
        ).join('')
    }

    static bindClicks(buttons: Button[]) {
        buttons.filter(
            button => button.click instanceof Function
        ).map(
            meta => ({el: document.getElementById(meta.id), meta})
        ).forEach(
            button => button.el.addEventListener(
                'click',
                event => {
                    if (button.meta.title) {
                        console.group()
                        console.log(button.meta.title)
                    }

                    button.meta.click(event)
                }
            )
        )
    }

    static getMergeClass(mergeTo: MergeButton): string {
        if (mergeTo?.both || mergeTo?.left && mergeTo?.right) {
            return 'merge-both'
        }

        if (mergeTo?.left) {
            return 'merge-left'
        }

        if (mergeTo?.right) {
            return 'merge-right'
        }
    }
}
