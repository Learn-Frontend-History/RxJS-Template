import html from './html'
import {Component} from "@/classes/Component";
import ClearLogIcon from "@/components/clear-log-icon/class";

export default class ClearLog extends Component {
    constructor() {
        super(html);

        this.createButton()

        this.component.addEventListener(
            'click',
            _ => {
                console.clear()

                this.component.innerHTML = null
                this.createButton()
            }
        )
    }

    private createButton() {
        this.component.append(
            (new ClearLogIcon()).component
        )
    }
}
