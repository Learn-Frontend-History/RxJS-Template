import html from './html'
import {Component} from "@/classes/Component";
import ButtonGroup from "@/components/button-group/class";
import Group from "@/components/group/class";
import Button from "@/components/button/class";

export interface CardPayload {
    header: string,
    description: string,
    controls: (Button | ButtonGroup | Group)[]
}
export default class Card extends Component {
    constructor({header, description, controls}: CardPayload) {
        super(html);

        this.child('header').innerText = header
        this.child('description').innerText = description
        this.child('controls').append(
            ...controls.map(
                control => control.component
            )
        )
    }
}
