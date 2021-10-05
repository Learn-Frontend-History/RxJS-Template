import html from './index.html'
import './styles.sass'
import {Component} from "@/base/component";
import {Factory} from "@/base/factory";

export default class Button extends Component {
    constructor() {
        super(html);
    }
}

Factory.reg('button', Button)
