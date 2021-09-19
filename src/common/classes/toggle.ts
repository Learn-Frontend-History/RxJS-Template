import {Component} from "@/classes/component";

export default class Toggle extends Component {
    private flag = false

    constructor(
        html: any,
        private stateTrue: HTMLElement,
        private stateFalse: HTMLElement,
        toggle: (flag: boolean) => void
    ) {
        super(html);
        this.component.append(this.stateFalse)

        this.component.addEventListener(
            'click',
            _ => {
                this.flag = !this.flag

                this.component.innerHTML = null
                this.component.append(this.flag ? this.stateTrue : this.stateFalse)

                toggle(this.flag)
            }
        )
    }
}
