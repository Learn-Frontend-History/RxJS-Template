import {Component} from "@/classes/Component";

export default class Icon extends Component {
    constructor(
        html: any,
        click: (event: MouseEvent) => void,
        createIcon: (component: HTMLElement) => void
    ) {
        super(html);
        createIcon(this.component)

        this.component.addEventListener(
            'click',
            _ => {
                click(_)

                this.component.innerHTML = null
                createIcon(this.component)
            }
        )
    }
}
